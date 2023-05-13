#!/bin/bash

#Fix constraints
docker exec -i postgres /bin/bash -c "psql -d \$POSTGRES_DB << EOF
ALTER TABLE ONLY hosts_ips
ADD CONSTRAINT hosts_ips_id_hostname_id_ip_id_key UNIQUE (id, hostname_id, ip_id);

ALTER TABLE ONLY hosts_ports
ADD CONSTRAINT hosts_ports_id_hostname_id_port_id_key UNIQUE (id, hostname_id, port_id);

ALTER TABLE ONLY ips
ADD CONSTRAINT ips_scan_id_ip_key UNIQUE (scan_id, ip);

ALTER TABLE ONLY ports
ADD CONSTRAINT ports_scan_id_port_key UNIQUE (scan_id, port);

ALTER TABLE ONLY scans
ADD CONSTRAINT scans_name_key UNIQUE (name);

ALTER TABLE ONLY scans_vulnerabilities
ADD CONSTRAINT scans_vulnerabilities_id_scan_id_vulnerability_id_key UNIQUE (id, scan_id, vulnerability_id);

ALTER TABLE ONLY urls
ADD CONSTRAINT urls_scan_id_hostname_id_url_key UNIQUE (scan_id, hostname_id, url);

ALTER TABLE ONLY vulnerabilities
ADD CONSTRAINT vulnerabilities_unique UNIQUE NULLS NOT DISTINCT (domain_id, hostname_id, ip_id, port_id, severity, summary, details);

ALTER TABLE ONLY vulnerabilities
ADD CONSTRAINT vulnerabilities_unique2 UNIQUE NULLS NOT DISTINCT (hostname_id, ip_id, port_id, severity, summary, details);

-- CREATE UNIQUE INDEX i_vulns_details ON vulnerabilities USING btree (ip_id, port_id, hostname_id, ((details IS NULL))) WHERE (details IS NULL);

CREATE UNIQUE INDEX i_vulns_details ON vulnerabilities USING btree (domain_id, hostname_id, port_id, severity, summary, details, ((tags::jsonb -> 0)), ((ip_id IS NULL))) WHERE (ip_id IS NULL);

CREATE UNIQUE INDEX i_vulns_host_ip ON vulnerabilities USING btree (domain_id, hostname_id, ip_id, port_id, severity, summary, details);

-- CREATE UNIQUE INDEX i_vulns_tags ON vulnerabilities USING btree ((tags::jsonb -> 0));

CREATE UNIQUE INDEX i_vulns_hostname ON vulnerabilities USING btree (ip_id, port_id, ((hostname_id IS NULL))) WHERE (hostname_id IS NULL);

-- CREATE UNIQUE INDEX i_vulns_ips ON vulnerabilities USING btree (((ip_id IS NULL))) WHERE (ip_id IS NULL);

CREATE UNIQUE INDEX i_vulns_ports ON vulnerabilities USING btree (((port_id IS NULL))) WHERE (port_id IS NULL);
EOF"

#Add time triggers
docker exec -i postgres /bin/bash -c "psql -d \$POSTGRES_DB << EOF
CREATE FUNCTION trigger_timestamp() RETURNS trigger
    LANGUAGE plpgsql
    AS \\$\\$

BEGIN
    IF (TG_OP = 'INSERT') THEN
        EXECUTE format(E'update "%s" set date_created = \'%s\', date_updated = \'%s\'
            WHERE id = %s', TG_TABLE_NAME,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,NEW.id);
    ELSEIF (TG_OP = 'UPDATE') THEN
        EXECUTE format(E'update "%s" set date_updated = \'%s\'
            WHERE id = %s', TG_TABLE_NAME,CURRENT_TIMESTAMP,NEW.id);
    END IF;
    RETURN NEW;
END
\\$\\$;

CREATE TRIGGER log_time_domains AFTER INSERT OR UPDATE ON domains FOR EACH ROW WHEN ((pg_trigger_depth() = 0)) EXECUTE FUNCTION trigger_timestamp();

CREATE TRIGGER log_time_hosts AFTER INSERT OR UPDATE ON hosts FOR EACH ROW WHEN ((pg_trigger_depth() = 0)) EXECUTE FUNCTION trigger_timestamp();

CREATE TRIGGER log_time_ips AFTER INSERT OR UPDATE ON ips FOR EACH ROW WHEN ((pg_trigger_depth() = 0)) EXECUTE FUNCTION trigger_timestamp();

CREATE TRIGGER log_time_ports AFTER INSERT OR UPDATE ON ports FOR EACH ROW WHEN ((pg_trigger_depth() = 0)) EXECUTE FUNCTION trigger_timestamp();

CREATE TRIGGER log_time_scans AFTER INSERT OR UPDATE ON scans FOR EACH ROW WHEN ((pg_trigger_depth() = 0)) EXECUTE FUNCTION trigger_timestamp();

CREATE TRIGGER log_time_urls AFTER INSERT OR UPDATE ON urls FOR EACH ROW WHEN ((pg_trigger_depth() = 0)) EXECUTE FUNCTION trigger_timestamp();

--- CREATE TRIGGER log_time_vulnerabilities AFTER INSERT OR UPDATE ON vulnerabilities FOR EACH ROW WHEN ((pg_trigger_depth() = 0)) EXECUTE FUNCTION trigger_timestamp();
EOF"

#Add Demo Roles
docker exec -i postgres /bin/sh -c "psql -d \$POSTGRES_DB << EOF
INSERT INTO organisations (id, status, user_created, date_created, user_updated, date_updated, name) VALUES (1, 'active', 'ca4d7676-f94d-4561-a84f-4db18fba6d21', '2022-04-30 23:55:46.224+00', NULL, NULL, 'DEMO');

INSERT INTO organisations_directus_users (id, directus_users_id, organisations_id) VALUES (1, 'ca4d7676-f94d-4561-a84f-4db18fba6d21', 1);

--- DEMOuser role
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'organisations', 'read', '{\"_and\":[{\"users\":{\"directus_users_id\":{\"id\":{\"_eq\":\"\\\$CURRENT_USER\"}}}}]}', '{}', NULL, '*');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'vulnerabilities', 'read', '{\"_and\":[{\"domain_id\":{\"organisations\":{\"users\":{\"directus_users_id\":{\"id\":{\"_eq\":\"\\\$CURRENT_USER\"}}}}}}]}', NULL, NULL, 'id,summary,severity,details,tags,links,domain_id,hostname_id,ip_id,port_id,verified,user_created,user_updated,date_created,date_updated,status,scans');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'ips', 'read', '{\"_and\":[{\"hosts\":{\"hostname_id\":{\"domain_id\":{\"organisations\":{\"users\":{\"directus_users_id\":{\"id\":{\"_eq\":\"\\\$CURRENT_USER\"}}}}}}}}]}', NULL, NULL, 'id,scan_ip,ip,user_created,scan_id,status,user_updated,date_created,hosts,date_updated');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'ports', 'read', NULL, NULL, NULL, 'id,port,status,user_updated,user_created,date_updated,date_created,scan_id,hosts');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'scans', 'read', '{\"_and\":[{\"domain_id\":{\"organisations\":{\"users\":{\"directus_users_id\":{\"id\":{\"_eq\":\"\\\$CURRENT_USER\"}}}}}}]}', NULL, NULL, 'id,domain_id,date_created,user_created,date_updated,user_updated,vulnerabilities');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'hosts_ips', 'read', '{}', '{}', NULL, '*');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'hosts_ports', 'read', '{}', '{}', NULL, '*');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'hosts', 'read', '{\"_and\":[{\"domain_id\":{\"organisations\":{\"users\":{\"directus_users_id\":{\"id\":{\"_eq\":\"\\\$CURRENT_USER\"}}}}}}]}', NULL, NULL, 'id,scan_host,hostname,inscope,status,domain_id,user_created,scan_id,user_updated,ips,date_updated,date_created,ports');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ( 'fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'scans_vulnerabilities', 'read', '{}', '{}', NULL, '*');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ( 'fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'organisations_directus_users', 'read', '{}', '{}', NULL, '*');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ( 'fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'urls', 'read', '{\"_and\":[{\"hostname_id\":{\"domain_id\":{\"organisations\":{\"users\":{\"directus_users_id\":{\"id\":{\"_eq\":\"\\\$CURRENT_USER\"}}}}}}}]}', NULL, NULL, 'id,url,hostname_id,user_created,scan_id,status,user_updated,date_created,date_updated');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ( 'fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'directus_panels', 'read', '{}', '{}', NULL, '*');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ( 'fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'directus_dashboards', 'read', '{}', '{}', NULL, '*');
INSERT INTO directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'directus_files', 'read', '{}', NULL, NULL, '*');

EOF"

#Add SYS Role Permissions
docker exec -i postgres /bin/sh -c "psql -d \$POSTGRES_DB << EOF

--- SYS Import

INSERT INTO public.directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('5c6128e5-75d0-4dd1-9e13-f47bb6b3467c', 'devices', 'create', '{}', '{}', NULL, '*');
INSERT INTO public.directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('5c6128e5-75d0-4dd1-9e13-f47bb6b3467c', 'devices', 'update', '{}', '{}', NULL, '*');

--- SYS Images

INSERT INTO public.directus_permissions (role, collection, action, permissions, validation, presets, fields) VALUES ('0202a11b-1614-46b9-b73f-e53a7a765186', 'directus_files', 'read', '{}', '{}', NULL, '*');

EOF"

#Add Demo Dashboard
docker exec -i postgres /bin/sh -c "psql -d \$POSTGRES_DB << EOF

INSERT INTO public.directus_dashboards (id, name, icon, note, date_created, user_created) VALUES ('435514c6-0928-4e0d-9b9e-9f40b8c25167', 'Vulnerabilities', 'dashboard', NULL, '2022-04-30 23:58:20.114+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');

INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('03678fd6-bf9c-45c0-a5af-4500a4f734de', '435514c6-0928-4e0d-9b9e-9f40b8c25167', NULL, NULL, NULL, false, NULL, 'label', 1, 7, 9, 6, '{\"text\":\"Inactive\",\"color\":\"#30363D\"}', '2022-05-01 00:27:12.449+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('a5eaf1f0-ea74-49d1-a086-ce955e3dfcf6', '435514c6-0928-4e0d-9b9e-9f40b8c25167', NULL, NULL, NULL, false, NULL, 'label', 1, 1, 9, 6, '{\"text\":\"Active\",\"color\":\"#8965FF\"}', '2022-05-01 00:27:12.436+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('694cb28f-b686-4990-8eee-1458495bbf74', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'CRIT', 'bug_report', '#800000', true, NULL, 'metric', 42, 7, 8, 6, '{\"collection\":\"vulnerabilities\",\"field\":\"severity\",\"function\":\"count\",\"filter\":{\"_and\":[{\"severity\":{\"_eq\":\"5\"}},{\"status\":{\"_eq\":\"inactive\"}}]},\"conditionalFormatting\":[{\"operator\":\"<=\",\"value\":10,\"color\":\"#21B546\"},{\"operator\":\">=\",\"value\":11,\"color\":\"#FFC23B\"},{\"operator\":\">=\",\"value\":50,\"color\":\"#E35169\"}]}', '2022-05-01 00:27:12.498+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('7963ab00-02bc-4e78-b3a3-b03022b289cd', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'HIGH', 'bug_report', '#DB4343', true, NULL, 'metric', 34, 7, 8, 6, '{\"collection\":\"vulnerabilities\",\"field\":\"severity\",\"function\":\"count\",\"filter\":{\"_and\":[{\"severity\":{\"_eq\":\"4\"}},{\"status\":{\"_eq\":\"inactive\"}}]},\"conditionalFormatting\":[{\"operator\":\"<=\",\"value\":10,\"color\":\"#21B546\"},{\"operator\":\">=\",\"value\":11,\"color\":\"#FFC23B\"},{\"operator\":\">=\",\"value\":50,\"color\":\"#E35169\"}]}', '2022-05-01 00:27:12.489+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('86866a96-c65a-4408-9a19-a96abd4f7895', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'Monthly findings', 'timeline', '#2ECDA7', true, NULL, 'time-series', 1, 13, 49, 10, '{\"collection\":\"vulnerabilities\",\"function\":\"count\",\"dateField\":\"date_created\",\"valueField\":\"severity\",\"range\":\"1 month\",\"color\":\"#2ECDA7\",\"precision\":\"day\"}', '2022-05-01 00:14:42.916+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('0188451d-b0c6-419d-b448-98c450a33d6f', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'CRIT', 'bug_report', '#800000', true, NULL, 'metric', 42, 1, 8, 6, '{\"collection\":\"vulnerabilities\",\"field\":\"severity\",\"function\":\"count\",\"filter\":{\"_and\":[{\"severity\":{\"_eq\":\"5\"}},{\"status\":{\"_eq\":\"active\"}}]},\"conditionalFormatting\":[{\"operator\":\"<=\",\"value\":10,\"color\":\"#21B546\"},{\"operator\":\">=\",\"value\":11,\"color\":\"#FFC23B\"},{\"operator\":\">=\",\"value\":50,\"color\":\"#E35169\"}]}', '2022-05-01 00:14:42.904+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('2ab755ce-cd9b-4a83-9b25-44fe42fb4883', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'MED', 'bug_report', '#E5D843', true, NULL, 'metric', 26, 7, 8, 6, '{\"collection\":\"vulnerabilities\",\"field\":\"severity\",\"function\":\"count\",\"filter\":{\"_and\":[{\"severity\":{\"_eq\":\"3\"}},{\"status\":{\"_eq\":\"inactive\"}}]},\"conditionalFormatting\":[{\"operator\":\"<=\",\"value\":10,\"color\":\"#21B546\"},{\"operator\":\">=\",\"value\":11,\"color\":\"#FFC23B\"},{\"operator\":\">=\",\"value\":50,\"color\":\"#E35169\"}]}', '2022-05-01 00:27:12.48+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('33154c55-e77f-4177-9f5c-34849fa4eaf8', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'INFO', 'bug_report', '#9C97D8', true, NULL, 'metric', 10, 1, 8, 6, '{\"collection\":\"vulnerabilities\",\"field\":\"severity\",\"function\":\"count\",\"filter\":{\"_and\":[{\"severity\":{\"_eq\":\"1\"}},{\"status\":{\"_eq\":\"active\"}}]},\"conditionalFormatting\":[{\"operator\":\"<=\",\"value\":10,\"color\":\"#21B546\"},{\"operator\":\">=\",\"value\":11,\"color\":\"#FFC23B\"},{\"operator\":\">=\",\"value\":50,\"color\":\"#E35169\"}]}', '2022-05-01 00:14:42.844+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('39c6120b-1bb1-4011-84ed-7e03c4b1231b', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'MED', 'bug_report', '#E5D843', true, NULL, 'metric', 26, 1, 8, 6, '{\"collection\":\"vulnerabilities\",\"field\":\"severity\",\"function\":\"count\",\"filter\":{\"_and\":[{\"severity\":{\"_eq\":\"3\"}},{\"status\":{\"_eq\":\"active\"}}]},\"conditionalFormatting\":[{\"operator\":\"<=\",\"value\":10,\"color\":\"#21B546\"},{\"operator\":\">=\",\"value\":11,\"color\":\"#FFC23B\"},{\"operator\":\">=\",\"value\":50,\"color\":\"#E35169\"}]}', '2022-05-01 00:14:42.875+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('91d925d4-cec0-40f6-b180-452a05724208', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'LOW', 'bug_report', '#97D8BA', true, NULL, 'metric', 18, 1, 8, 6, '{\"collection\":\"vulnerabilities\",\"field\":\"severity\",\"function\":\"count\",\"filter\":{\"_and\":[{\"severity\":{\"_eq\":\"2\"}},{\"status\":{\"_eq\":\"active\"}}]},\"conditionalFormatting\":[{\"operator\":\"<=\",\"value\":10,\"color\":\"#21B546\"},{\"operator\":\">=\",\"value\":11,\"color\":\"#FFC23B\"},{\"operator\":\">=\",\"value\":50,\"color\":\"#E35169\"}]}', '2022-05-01 00:14:42.86+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('c3d06ab8-4eca-477f-abd5-12833d8bfa0d', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'HIGH', 'bug_report', '#DB4343', true, NULL, 'metric', 34, 1, 8, 6, '{\"collection\":\"vulnerabilities\",\"field\":\"severity\",\"function\":\"count\",\"filter\":{\"_and\":[{\"severity\":{\"_eq\":\"4\"}},{\"status\":{\"_eq\":\"active\"}}]},\"conditionalFormatting\":[{\"operator\":\"<=\",\"value\":10,\"color\":\"#21B546\"},{\"operator\":\">=\",\"value\":11,\"color\":\"#FFC23B\"},{\"operator\":\">=\",\"value\":50,\"color\":\"#E35169\"}]}', '2022-05-01 00:14:42.886+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('fb903327-1389-4bc3-b7dd-1af0f693cd23', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'LOW', 'bug_report', '#97D8BA', true, NULL, 'metric', 18, 7, 8, 6, '{\"collection\":\"vulnerabilities\",\"field\":\"severity\",\"function\":\"count\",\"filter\":{\"_and\":[{\"severity\":{\"_eq\":\"2\"}},{\"status\":{\"_eq\":\"inactive\"}}]},\"conditionalFormatting\":[{\"operator\":\"<=\",\"value\":10,\"color\":\"#21B546\"},{\"operator\":\">=\",\"value\":11,\"color\":\"#FFC23B\"},{\"operator\":\">=\",\"value\":50,\"color\":\"#E35169\"}]}', '2022-05-01 00:27:12.471+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
INSERT INTO directus_panels (id, dashboard, name, icon, color, show_header, note, type, position_x, position_y, width, height, options, date_created, user_created) VALUES ('f6bbddd9-18db-4932-b77e-e6b577b6f3a5', '435514c6-0928-4e0d-9b9e-9f40b8c25167', 'INFO', 'bug_report', '#9C97D8', true, NULL, 'metric', 10, 7, 8, 6, '{\"collection\":\"vulnerabilities\",\"field\":\"severity\",\"function\":\"count\",\"filter\":{\"_and\":[{\"severity\":{\"_eq\":\"1\"}},{\"status\":{\"_eq\":\"inactive\"}}]},\"conditionalFormatting\":[{\"operator\":\">=\",\"value\":0,\"color\":\"#A2B5CD\"}]}', '2022-05-01 00:27:12.46+00', 'ca4d7676-f94d-4561-a84f-4db18fba6d21');
EOF"

#add vuln preset
docker exec -i postgres /bin/sh -c "psql -d \$POSTGRES_DB << EOF

INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES (NULL, NULL, NULL, 'vulnerabilities', NULL, 'tabular', '{\"tabular\":{\"fields\":[\"summary\",\"severity\",\"tags\",\"hostname_id.hostname\",\"ip_id.ip\",\"port_id.port\",\"date_updated\",\"status\",\"verified\"]}}', '{\"tabular\":{\"widths\":{\"tags\":372.07806396484375}}}', NULL, NULL, 'bookmark_outline', NULL);
INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES ('Info', NULL, NULL, 'vulnerabilities', NULL, 'tabular', '{\"tabular\":{\"fields\":[\"summary\",\"severity\",\"tags\",\"hostname_id.hostname\",\"ip_id.ip\",\"port_id.port\",\"date_updated\",\"status\",\"verified\"],\"page\":1}}', '{\"tabular\":{\"widths\":{\"tags\":372.07806396484375}}}', NULL, '{\"_and\":[{\"severity\":{\"_eq\":\"1\"}}]}', 'info', '#3399FF');
INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES ('Low', NULL, NULL, 'vulnerabilities', NULL, 'tabular', '{\"tabular\":{\"fields\":[\"summary\",\"severity\",\"tags\",\"hostname_id.hostname\",\"ip_id.ip\",\"port_id.port\",\"date_updated\",\"status\",\"verified\"],\"page\":1}}', '{\"tabular\":{\"widths\":{\"tags\":372.07806396484375}}}', NULL, '{\"_and\":[{\"severity\":{\"_eq\":\"2\"}}]}', 'wifi_find', '#2ECDA7');
INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES ('Medium', NULL, NULL, 'vulnerabilities', NULL, 'tabular', '{\"tabular\":{\"fields\":[\"summary\",\"severity\",\"tags\",\"hostname_id.hostname\",\"ip_id.ip\",\"port_id.port\",\"date_updated\",\"status\",\"verified\"],\"page\":1}}', '{\"tabular\":{\"widths\":{\"tags\":372.07806396484375}}}', NULL, '{\"_and\":[{\"severity\":{\"_eq\":\"3\"}}]}', 'perm_scan_wifi', '#FFC23B');
INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES ('High', NULL, NULL, 'vulnerabilities', NULL, 'tabular', '{\"tabular\":{\"fields\":[\"summary\",\"severity\",\"tags\",\"hostname_id.hostname\",\"ip_id.ip\",\"port_id.port\",\"date_updated\",\"status\",\"verified\"],\"page\":1}}', '{\"tabular\":{\"widths\":{\"tags\":372.07806396484375}}}', NULL, '{\"_and\":[{\"severity\":{\"_eq\":\"4\"}}]}', 'settings_overscan', '#E35169');
INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES ('Critical', NULL, NULL, 'vulnerabilities', NULL, 'tabular', '{\"tabular\":{\"fields\":[\"summary\",\"severity\",\"tags\",\"hostname_id.hostname\",\"ip_id.ip\",\"port_id.port\",\"date_updated\",\"status\",\"verified\"],\"page\":1}}', '{\"tabular\":{\"widths\":{\"tags\":372.07806396484375}}}', NULL, '{\"_and\":[{\"severity\":{\"_eq\":\"5\"}}]}', 'warning', '#7D3636');
INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES ('Ports Interesting', NULL, NULL, 'vulnerabilities', NULL, 'tabular', '{\"tabular\":{\"fields\":[\"summary\",\"severity\",\"tags\",\"hostname_id.hostname\",\"ip_id.ip\",\"port_id.port\",\"date_updated\",\"status\",\"verified\"],\"page\":1}}', '{\"tabular\":{\"widths\":{\"tags\":372.07806396484375}}}', NULL, '{\"_and\":[{\"summary\":{\"_contains\":\"Open ports\"}},{\"port_id\":{\"port\":{\"_nin\":[\"21\",\"22\",\"80\",\"443\"]}}}]}', 'bookmark_outline', '#E8FF3D');
INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES ('Ports Open', NULL, NULL, 'vulnerabilities', NULL, 'tabular', '{\"tabular\":{\"fields\":[\"summary\",\"severity\",\"tags\",\"hostname_id.hostname\",\"ip_id.ip\",\"port_id.port\",\"date_updated\",\"status\",\"verified\"],\"page\":1}}', '{\"tabular\":{\"widths\":{\"tags\":372.07806396484375}}}', NULL, '{\"_and\":[{\"summary\":{\"_contains\":\"Open ports\"}}]}', 'bookmark_outline', '#A2B5CD');
INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES (NULL, NULL, NULL, 'compliance', NULL, 'tabular', '{\"tabular\":{\"page\":1,\"fields\":[\"requirement.frameworks_id.function\",\"requirement.frameworks_id.subcategory\",\"rating\"]}}', '{\"tabular\":{\"widths\":{\"requirement.frameworks_id.subcategory\":577.6666259765625}}}', NULL, NULL, 'bookmark_outline', NULL);
INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES (NULL, NULL, NULL, 'risks', NULL, 'tabular', '{\"tabular\":{\"fields\":[\"risk\",\"likelihood\",\"impact\",\"level\",\"status\"]}}', '{\"tabular\":{\"widths\":{\"risk\":269.33331298828125}}}', NULL, NULL, 'bookmark_outline', NULL);
INSERT INTO directus_presets (bookmark, \"user\", role, collection, search, layout, layout_query, layout_options, refresh_interval, filter, icon, color) VALUES (NULL, NULL, NULL, 'devices', NULL, 'tabular', '{\"tabular\":{\"fields\":[\"ip\",\"internal_names\",\"type\",\"os\",\"detected_by\",\"services\",\"status\",\"date_updated\"]}}', '{\"tabular\":{\"widths\":{\"internal_names\":167,\"detected_by\":120.6666259765625,\"services\":232}}}', NULL, NULL, 'bookmark_outline', NULL);

EOF"

# add alert on user login - uses admin user

docker exec -i postgres /bin/sh -c "psql -d \$POSTGRES_DB << EOF

INSERT INTO directus_flows (id, name, icon, color, status, trigger, accountability, options, operation, date_created, user_created) 
VALUES ('b4bf500b-669c-48cd-bdf8-df3f21182127', 'User Login Alert', 'verified_user', '#ADC247', 'active', 'event', 'all', '{\"type\":\"action\",\"scope\":[\"auth.login\"]}', 'a2be8de9-7233-4341-a044-69bf37a47b28', '2022-06-05 00:12:32.076+00', NULL);

INSERT INTO directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) 
VALUES ('a5f1b662-a367-4c5c-9c48-4097bbd8be4c', 'Send Notification', 'notification_user', 'notification', 45, 17, '{\"recipient\":\"{{\\\$trigger.user}}\",\"subject\":\"User login {{\\\$trigger.status}}\",\"message\":\"We would like to confirm recent sign-in activity on your account.\n\nfrom IP: {{ \\\$accountability.ip }}\n\nwith User Agent: {{ \\\$accountability.userAgent }}\n\n**status:  {{\\\$trigger.status}}**\n\n[CISO360.AI](https://ciso360.ai/)\",\"permissions\":\"\\\$full\"}', NULL, NULL, 'b4bf500b-669c-48cd-bdf8-df3f21182127', '2022-06-05 01:27:42.271+00', NULL);

INSERT INTO directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) 
VALUES ('a2be8de9-7233-4341-a044-69bf37a47b28', 'Send Email', 'mail_login', 'mail', 21, 1, '{\"to\":[\"{{\\\$trigger.payload.email}}\",\"alerts@altersec.com\"],\"subject\":\"User login {{\\\$trigger.status}}\",\"body\":\"Email: {{\\\$trigger.payload.email}}\n\nfrom IP: {{ \\\$accountability.ip }}\n\nwith User Agent: {{ \\\$accountability.userAgent }}\n\n**status:  {{\\\$trigger.status}}**\"}', NULL, 'a5f1b662-a367-4c5c-9c48-4097bbd8be4c', 'b4bf500b-669c-48cd-bdf8-df3f21182127', '2022-06-05 01:27:42.271+00', NULL);

INSERT INTO directus_flows (id, name, icon, color, status, trigger, accountability, options, operation, date_created, user_created) 
VALUES ('458a622f-1e36-4664-a9aa-3880add4f51f', 'New asset', 'bolt', NULL, 'active', 'event', 'all', '{\"type\":\"action\",\"scope\":[\"items.create\"],\"collections\":[\"domains\",\"hosts\",\"ips\"]}', 'ac7977fc-616b-46fc-a03f-e2048abf45f9', '2022-06-06 10:15:00.833+00', NULL);

INSERT INTO directus_operations (id, name, key, type, position_x, position_y, options, resolve, reject, flow, date_created, user_created) 
VALUES ('ac7977fc-616b-46fc-a03f-e2048abf45f9', 'Email', 'email', 'mail', 19, 1, '{\"to\":[\"alerts@altersec.com\"],\"subject\":\"CISO360 change\",\"body\":\"**Change: **{{\\\$trigger.payload}}\n\n**From IP: **{{\\\$trigger.accountability.ip}}\"}', NULL, NULL, '458a622f-1e36-4664-a9aa-3880add4f51f', '2022-06-06 10:15:55.705+00', NULL);

EOF"

$PWD/scripts/add_csf.sh
$PWD/scripts/add_rating_calculation.sh
$PWD/scripts/regular_jobs.sh
$PWD/scripts/regular_ip_tls_scan.sh
$PWD/scripts/regular_host_tls_scan.sh
$PWD/scripts/regular_domain_scan.sh
