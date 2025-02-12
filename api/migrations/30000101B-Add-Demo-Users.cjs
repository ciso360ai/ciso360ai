module.exports = {
	async up(knex) {
        await knex.schema.raw(`
		INSERT INTO directus_roles (id, name, icon) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'DEMO', 'supervised_user_circle');
		INSERT INTO directus_users (id, first_name, last_name, email, status, role, provider, email_notifications) VALUES ('ca4d7676-f94d-4561-a84f-4db18fba6d21', 'DEMO', 'TEST', 'demo@ciso360.ai', 'draft', 'fb9a9ff6-f729-481f-9c27-f152f30d4daa','default', false);

		INSERT INTO directus_policies (id, name, icon, description, ip_access, enforce_tfa, admin_access, app_access) VALUES ('7a8cecea-c679-4eab-9e34-6f84e7487c5a', 'demo_access', 'badge', NULL, NULL, false, false, true);
		INSERT INTO directus_access (id, role, "user", policy, sort) VALUES ('431d018a-f106-4991-8809-c340bb727825', 'fb9a9ff6-f729-481f-9c27-f152f30d4daa', NULL, '7a8cecea-c679-4eab-9e34-6f84e7487c5a', 1);

		INSERT INTO directus_roles (id, name, icon) VALUES ('0202a11b-1614-46b9-b73f-e53a7a765186', 'SYS Images', 'supervised_user_circle');
		INSERT INTO directus_users (id, first_name, last_name, email, status, role, provider, email_notifications) VALUES ('bcb9dab2-2138-44fb-be54-41437f2ea6c0', 'SYS', 'Images', 'img@ciso360.ai', 'draft', '0202a11b-1614-46b9-b73f-e53a7a765186','default', false);

		INSERT INTO directus_roles (id, name, icon) VALUES ('5c6128e5-75d0-4dd1-9e13-f47bb6b3467c', 'SYS Import', 'supervised_user_circle');
		INSERT INTO directus_users (id, first_name, last_name, email, status, role, provider, email_notifications) VALUES ('e369b7a3-d363-4656-929d-f8ff78bac20d', 'SYS', 'Import', 'import@ciso360.ai', 'draft', '5c6128e5-75d0-4dd1-9e13-f47bb6b3467c','default', false);

	`)},

	async down(knex) {
		await knex.schema.dropTable('test1');
	},
};
