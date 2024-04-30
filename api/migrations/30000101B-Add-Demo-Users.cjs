module.exports = {
	async up(knex) {
        await knex.schema.raw(`
		INSERT INTO directus_roles (id, name, icon, description, ip_access, enforce_tfa, admin_access, app_access) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'DEMOuser', 'supervised_user_circle', NULL, NULL, false, false, true);

		INSERT INTO directus_users (id, first_name, last_name, email, status, role) VALUES ('ca4d7676-f94d-4561-a84f-4db18fba6d21', 'Demo', 'User', 'demo@ciso360.ai', 'draft', 'fb9a9ff6-f729-481f-9c27-f152f30d4daa');

		INSERT INTO directus_roles (id, name, icon, description, ip_access, enforce_tfa, admin_access, app_access) VALUES ('0202a11b-1614-46b9-b73f-e53a7a765186', 'SYS Images', 'supervised_user_circle', NULL, NULL, false, false, false);

		INSERT INTO directus_users (id, first_name, last_name, email, status, role) VALUES ('bcb9dab2-2138-44fb-be54-41437f2ea6c0', 'SYS', 'Images', 'img@ciso360.ai', 'draft', '0202a11b-1614-46b9-b73f-e53a7a765186');

		INSERT INTO directus_roles (id, name, icon, description, ip_access, enforce_tfa, admin_access, app_access) VALUES ('5c6128e5-75d0-4dd1-9e13-f47bb6b3467c', 'SYS Import', 'supervised_user_circle', 'allows only device imports', NULL, false, false, false);

		INSERT INTO directus_users (id, first_name, last_name, email, status, role) VALUES ('e369b7a3-d363-4656-929d-f8ff78bac20d', 'SYS', 'Import', 'import@ciso360.ai', 'draft', '5c6128e5-75d0-4dd1-9e13-f47bb6b3467c');

	`)},

	async down(knex) {
		await knex.schema.dropTable('test1');
	},
};
