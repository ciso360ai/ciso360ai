module.exports = {
	async up(knex) {
        await knex.schema.raw(`
		INSERT INTO directus_roles (id, name, icon, description, ip_access, enforce_tfa, admin_access, app_access) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'DEMOuser', 'supervised_user_circle', NULL, NULL, false, false, true);

		INSERT INTO directus_users (id, first_name, last_name, email, password, location, title, description, tags, avatar, language, theme, tfa_secret, status, role, token, last_access, last_page, provider, external_identifier, auth_data, email_notifications) VALUES ('ca4d7676-f94d-4561-a84f-4db18fba6d21', 'Demo', 'User', 'demo@ciso360.ai', '$argon2i$v=19$m=4096,t=3,p=1$hh1SYD61wDBeQh2TLQT15w$pHLbsmDQyGiqlt+7c7Xbcaj1Ud04xoR5vt+6cvo7JvA', NULL, NULL, NULL, NULL, NULL, NULL, 'auto', NULL, 'active', 'fb9a9ff6-f729-481f-9c27-f152f30d4daa', NULL, NULL, NULL, 'default', NULL, NULL, true);

		INSERT INTO public.directus_roles (id, name, icon, description, ip_access, enforce_tfa, admin_access, app_access) VALUES ('0202a11b-1614-46b9-b73f-e53a7a765186', 'SYS Images', 'supervised_user_circle', NULL, NULL, false, false, false);

		INSERT INTO public.directus_users (id, first_name, last_name, email, password, location, title, description, tags, avatar, language, theme, tfa_secret, status, role, token, last_access, last_page, provider, external_identifier, auth_data, email_notifications) VALUES ('bcb9dab2-2138-44fb-be54-41437f2ea6c0', 'SYS', 'Images', 'img@ciso360.ai', '$argon2id$v=19$m=4096,t=3,p=1$WDqDkC4VkYmrvZJaWS10zA$4vvKGRhWfG4P/Q7CFUmqkQbUB0atx1TWO4uiOD7T7sU', NULL, NULL, NULL, NULL, NULL, NULL, 'auto', NULL, 'active', '0202a11b-1614-46b9-b73f-e53a7a765186', '8J6nhd3DaRZvNazfbJtiVbsg0MXzyQ7A', NULL, NULL, 'default', NULL, NULL, false);

		INSERT INTO public.directus_roles (id, name, icon, description, ip_access, enforce_tfa, admin_access, app_access) VALUES ('5c6128e5-75d0-4dd1-9e13-f47bb6b3467c', 'SYS Import', 'supervised_user_circle', 'allows only device imports', NULL, false, false, false);

		INSERT INTO public.directus_users (id, first_name, last_name, email, password, location, title, description, tags, avatar, language, theme, tfa_secret, status, role, token, last_access, last_page, provider, external_identifier, auth_data, email_notifications) VALUES ('e369b7a3-d363-4656-929d-f8ff78bac20d', 'SYS', 'Import', 'import@ciso360.ai', '$argon2id$v=19$m=4096,t=3,p=1$TKZgxHx5wC5vLWVaCJDHlQ$+jqd65b+ZpGg0H9wZmmSFame6HfoACFkURvUNIeEreo', NULL, NULL, NULL, NULL, NULL, NULL, 'auto', NULL, 'active', '5c6128e5-75d0-4dd1-9e13-f47bb6b3467c', 'wFfKfZBO5ALpKzFCGqEiPtTljKMJ4U5T', NULL, NULL, 'default', NULL, NULL, true);

	`)},

	async down(knex) {
		await knex.schema.dropTable('test1');
	},
};
