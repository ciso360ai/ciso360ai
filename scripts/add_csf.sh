#!/bin/bash

#Add NIST CSF framework

docker exec -i postgres /bin/sh -c "psql -d \$POSTGRES_DB << EOF

INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Asset Management', 'ID.AM-1: Physical devices and systems within the organization are inventoried');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Asset Management', 'ID.AM-2: Software platforms and applications within the organization are inventoried');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Asset Management', 'ID.AM-3: Organizational communication and data flows are mapped');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Asset Management', 'ID.AM-4: External information systems are catalogued');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Asset Management', 'ID.AM-5: Resources (e.g., hardware, devices, data, time, personnel, and software) are prioritized based on their classification, criticality, and business value ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Asset Management', 'ID.AM-6: Cybersecurity roles and responsibilities for the entire workforce and third-party stakeholders (e.g., suppliers, customers, partners) are established');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Business Environment', 'ID.BE-1: The organizations role in the supply chain is identified and communicated');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Business Environment', 'ID.BE-2: The organizations place in critical infrastructure and its industry sector is identified and communicated');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Business Environment', 'ID.BE-3: Priorities for organizational mission, objectives, and activities are established and communicated');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Business Environment', 'ID.BE-4: Dependencies and critical functions for delivery of critical services are established');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Business Environment', 'ID.BE-5: Resilience requirements to support delivery of critical services are established for all operating states (e.g. under duress/attack, during recovery, normal operations)');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Governance', 'ID.GV-1: Organizational cybersecurity policy is established and communicated');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Governance', 'ID.GV-2: Cybersecurity roles and responsibilities are coordinated and aligned with internal roles and external partners');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Governance', 'ID.GV-3: Legal and regulatory requirements regarding cybersecurity, including privacy and civil liberties obligations, are understood and managed');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Governance', 'ID.GV-4: Governance and risk management processes address cybersecurity risks');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Risk Assessment', 'ID.RA-1: Asset vulnerabilities are identified and documented');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Risk Assessment', 'ID.RA-2: Cyber threat intelligence is received from information sharing forums and sources');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Risk Assessment', 'ID.RA-3: Threats, both internal and external, are identified and documented');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Risk Assessment', 'ID.RA-4: Potential business impacts and likelihoods are identified');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Risk Assessment', 'ID.RA-5: Threats, vulnerabilities, likelihoods, and impacts are used to determine risk');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Risk Assessment', 'ID.RA-6: Risk responses are identified and prioritized');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Risk Management Strategy', 'ID.RM-1: Risk management processes are established, managed, and agreed to by organizational stakeholders');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Risk Management Strategy', 'ID.RM-2: Organizational risk tolerance is determined and clearly expressed');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Risk Management Strategy', 'ID.RM-3: The organizations determination of risk tolerance is informed by its role in critical infrastructure and sector specific risk analysis');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Supply Chain Risk Management', 'ID.SC-1: Cyber supply chain risk management processes are identified, established, assessed, managed, and agreed to by organizational stakeholders');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Supply Chain Risk Management', 'ID.SC-2: Suppliers and third party partners of information systems, components, and services are identified, prioritized, and assessed using a cyber supply chain risk assessment process ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Supply Chain Risk Management', 'ID.SC-3: Contracts with suppliers and third-party partners are used to implement appropriate measures designed to meet the objectives of an organizations cybersecurity program and Cyber Supply Chain Risk Management Plan.');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Supply Chain Risk Management', 'ID.SC-4: Suppliers and third-party partners are routinely assessed using audits, test results, or other forms of evaluations to confirm they are meeting their contractual obligations.');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'IDENTIFY (ID)', 'Supply Chain Risk Management', 'ID.SC-5: Response and recovery planning and testing are conducted with suppliers and third-party providers');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Identity Management, Authentication and Access Control', 'PR.AC-1: Identities and credentials are issued, managed, verified, revoked, and audited for authorized devices, users and processes');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Identity Management, Authentication and Access Control', 'PR.AC-2: Physical access to assets is managed and protected');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Identity Management, Authentication and Access Control', 'PR.AC-3: Remote access is managed');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Identity Management, Authentication and Access Control', 'PR.AC-4: Access permissions and authorizations are managed, incorporating the principles of least privilege and separation of duties');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Identity Management, Authentication and Access Control', 'PR.AC-5: Network integrity is protected (e.g., network segregation, network segmentation)');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Identity Management, Authentication and Access Control', 'PR.AC-6: Identities are proofed and bound to credentials and asserted in interactions');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Identity Management, Authentication and Access Control', 'PR.AC-7: Users, devices, and other assets are authenticated (e.g., single-factor, multi-factor) commensurate with the risk of the transaction (e.g., individuals security and privacy risks and other organizational risks)');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Awareness and Training ', 'PR.AT-1: All users are informed and trained ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Awareness and Training ', 'PR.AT-2: Privileged users understand their roles and responsibilities ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Awareness and Training ', 'PR.AT-3: Third-party stakeholders (e.g., suppliers, customers, partners) understand their roles and responsibilities ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Awareness and Training ', 'PR.AT-4: Senior executives understand their roles and responsibilities ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Awareness and Training ', 'PR.AT-5: Physical and cybersecurity personnel understand their roles and responsibilities ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Data Security', 'PR.DS-1: Data-at-rest is protected');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Data Security', 'PR.DS-2: Data-in-transit is protected');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Data Security', 'PR.DS-3: Assets are formally managed throughout removal, transfers, and disposition');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Data Security', 'PR.DS-4: Adequate capacity to ensure availability is maintained');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Data Security', 'PR.DS-5: Protections against data leaks are implemented');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Data Security', 'PR.DS-6: Integrity checking mechanisms are used to verify software, firmware, and information integrity');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Data Security', 'PR.DS-7: The development and testing environment(s) are separate from the production environment');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Data Security', 'PR.DS-8: Integrity checking mechanisms are used to verify hardware integrity');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-1: A baseline configuration of information technology/industrial control systems is created and maintained incorporating security principles (e.g. concept of least functionality)');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-2: A System Development Life Cycle to manage systems is implemented');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-3: Configuration change control processes are in place');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-4: Backups of information are conducted, maintained, and tested ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-5: Policy and regulations regarding the physical operating environment for organizational assets are met');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-6: Data is destroyed according to policy');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-7: Protection processes are improved');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-8: Effectiveness of protection technologies is shared ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-9: Response plans (Incident Response and Business Continuity) and recovery plans (Incident Recovery and Disaster Recovery) are in place and managed');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-10: Response and recovery plans are tested');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-11: Cybersecurity is included in human resources practices (e.g., deprovisioning, personnel screening)');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Information Protection Processes and Procedures', 'PR.IP-12: A vulnerability management plan is developed and implemented');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Maintenance', 'PR.MA-1: Maintenance and repair of organizational assets are performed and logged, with approved and controlled tools');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Maintenance', 'PR.MA-2: Remote maintenance of organizational assets is approved, logged, and performed in a manner that prevents unauthorized access');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Protective Technology', 'PR.PT-1: Audit/log records are determined, documented, implemented, and reviewed in accordance with policy');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Protective Technology', 'PR.PT-2: Removable media is protected and its use restricted according to policy');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Protective Technology', 'PR.PT-3: The principle of least functionality is incorporated by configuring systems to provide only essential capabilities');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Protective Technology', 'PR.PT-4: Communications and control networks are protected');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'PROTECT (PR)', 'Protective Technology', 'PR.PT-5: Mechanisms (e.g., failsafe, load balancing, hot swap) are implemented to achieve resilience requirements in normal and adverse situations');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Anomalies and Events', 'DE.AE-1: A baseline of network operations and expected data flows for users and systems is established and managed');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Anomalies and Events', 'DE.AE-2: Detected events are analyzed to understand attack targets and methods');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Anomalies and Events', 'DE.AE-3: Event data are collected and correlated from multiple sources and sensors');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Anomalies and Events', 'DE.AE-4: Impact of events is determined');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Anomalies and Events', 'DE.AE-5: Incident alert thresholds are established');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Security Continuous Monitoring', 'DE.CM-1: The network is monitored to detect potential cybersecurity events');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Security Continuous Monitoring', 'DE.CM-2: The physical environment is monitored to detect potential cybersecurity events');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Security Continuous Monitoring', 'DE.CM-3: Personnel activity is monitored to detect potential cybersecurity events');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Security Continuous Monitoring', 'DE.CM-4: Malicious code is detected');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Security Continuous Monitoring', 'DE.CM-5: Unauthorized mobile code is detected');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Security Continuous Monitoring', 'DE.CM-6: External service provider activity is monitored to detect potential cybersecurity events');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Security Continuous Monitoring', 'DE.CM-7: Monitoring for unauthorized personnel, connections, devices, and software is performed');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Security Continuous Monitoring', 'DE.CM-8: Vulnerability scans are performed');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Detection Processes', 'DE.DP-1: Roles and responsibilities for detection are well defined to ensure accountability');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Detection Processes', 'DE.DP-2: Detection activities comply with all applicable requirements');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Detection Processes', 'DE.DP-3: Detection processes are tested');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Detection Processes', 'DE.DP-4: Event detection information is communicated');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'DETECT (DE)', 'Detection Processes', 'DE.DP-5: Detection processes are continuously improved');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Response Planning', 'RS.RP-1: Response plan is executed during or after an incident');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Communications', 'RS.CO-1: Personnel know their roles and order of operations when a response is needed');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Communications', 'RS.CO-2: Incidents are reported consistent with established criteria');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Communications', 'RS.CO-3: Information is shared consistent with response plans');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Communications', 'RS.CO-4: Coordination with stakeholders occurs consistent with response plans');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Communications', 'RS.CO-5: Voluntary information sharing occurs with external stakeholders to achieve broader cybersecurity situational awareness ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Analysis', 'RS.AN-1: Notifications from detection systems are investigated');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Analysis', 'RS.AN-2: The impact of the incident is understood');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Analysis', 'RS.AN-3: Forensics are performed');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Analysis', 'RS.AN-4: Incidents are categorized consistent with response plans');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Analysis', 'RS.AN-5: Processes are established to receive, analyze and respond to vulnerabilities disclosed to the organization from internal and external sources (e.g. internal testing, security bulletins, or security researchers)');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Mitigation', 'RS.MI-1: Incidents are contained');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Mitigation', 'RS.MI-2: Incidents are mitigated');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Mitigation', 'RS.MI-3: Newly identified vulnerabilities are mitigated or documented as accepted risks');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Improvements', 'RS.IM-1: Response plans incorporate lessons learned');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RESPOND (RS)', 'Improvements', 'RS.IM-2: Response strategies are updated');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RECOVER (RC)', 'Recovery Planning', 'RC.RP-1: Recovery plan is executed during or after a cybersecurity incident ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RECOVER (RC)', 'Improvements', 'RC.IM-1: Recovery plans incorporate lessons learned');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RECOVER (RC)', 'Improvements', 'RC.IM-2: Recovery strategies are updated');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RECOVER (RC)', 'Communications', 'RC.CO-1: Public relations are managed');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RECOVER (RC)', 'Communications', 'RC.CO-2: Reputation is repaired after an incident ');
INSERT INTO frameworks (name, function, category, subcategory) 
VALUES ('NIST CSF', 'RECOVER (RC)', 'Communications', 'RC.CO-3: Recovery activities are communicated to internal and external stakeholders as well as executive and management teams');

EOF"

#add default organisation compliance module

docker exec -i postgres /bin/sh -c "psql -d \$POSTGRES_DB << EOF
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');
INSERT INTO compliance (status) VALUES ('draft');

INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (1, 1, 1);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (2, 2, 2);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (3, 3, 3);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (4, 4, 4);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (5, 5, 5);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (6, 6, 6);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (7, 7, 7);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (8, 8, 8);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (9, 9, 9);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (10, 10, 10);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (11, 11, 11);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (12, 12, 12);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (13, 13, 13);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (14, 14, 14);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (15, 15, 15);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (16, 16, 16);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (17, 17, 17);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (18, 18, 18);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (19, 19, 19);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (20, 20, 20);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (21, 21, 21);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (22, 22, 22);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (23, 23, 23);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (24, 24, 24);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (25, 25, 25);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (26, 26, 26);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (27, 27, 27);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (28, 28, 28);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (29, 29, 29);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (30, 30, 30);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (31, 31, 31);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (32, 32, 32);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (33, 33, 33);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (34, 34, 34);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (35, 35, 35);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (36, 36, 36);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (37, 37, 37);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (38, 38, 38);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (39, 39, 39);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (40, 40, 40);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (41, 41, 41);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (42, 42, 42);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (43, 43, 43);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (44, 44, 44);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (45, 45, 45);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (46, 46, 46);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (47, 47, 47);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (48, 48, 48);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (49, 49, 49);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (50, 50, 50);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (51, 51, 51);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (52, 52, 52);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (53, 53, 53);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (54, 54, 54);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (55, 55, 55);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (56, 56, 56);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (57, 57, 57);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (58, 58, 58);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (59, 59, 59);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (60, 60, 60);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (61, 61, 61);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (62, 62, 62);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (63, 63, 63);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (64, 64, 64);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (65, 65, 65);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (66, 66, 66);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (67, 67, 67);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (68, 68, 68);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (69, 69, 69);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (70, 70, 70);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (71, 71, 71);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (72, 72, 72);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (73, 73, 73);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (74, 74, 74);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (75, 75, 75);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (76, 76, 76);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (77, 77, 77);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (78, 78, 78);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (79, 79, 79);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (80, 80, 80);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (81, 81, 81);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (82, 82, 82);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (83, 83, 83);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (84, 84, 84);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (85, 85, 85);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (86, 86, 86);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (87, 87, 87);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (88, 88, 88);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (89, 89, 89);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (90, 90, 90);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (91, 91, 91);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (92, 92, 92);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (93, 93, 93);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (94, 94, 94);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (95, 95, 95);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (96, 96, 96);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (97, 97, 97);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (98, 98, 98);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (99, 99, 99);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (100, 100, 100);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (101, 101, 101);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (102, 102, 102);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (103, 103, 103);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (104, 104, 104);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (105, 105, 105);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (106, 106, 106);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (107, 107, 107);
INSERT INTO compliance_frameworks (frameworks_id, id, compliance_id) VALUES (108, 108, 108);

EOF"
