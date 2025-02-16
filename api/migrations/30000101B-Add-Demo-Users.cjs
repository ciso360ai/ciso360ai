module.exports = {
	async up(knex) {
        await knex.schema.raw(`

		--- DEMO USERS
		INSERT INTO directus_roles (id, name, icon) VALUES ('fb9a9ff6-f729-481f-9c27-f152f30d4daa', 'DEMO', 'supervised_user_circle');
		INSERT INTO directus_users (id, first_name, last_name, email, status, role, provider, email_notifications) VALUES ('ca4d7676-f94d-4561-a84f-4db18fba6d21', 'DEMO', 'TEST', 'demo@ciso360.ai', 'draft', 'fb9a9ff6-f729-481f-9c27-f152f30d4daa','default', false);
		INSERT INTO directus_policies (id, name, icon, description, ip_access, enforce_tfa, admin_access, app_access) VALUES ('7a8cecea-c679-4eab-9e34-6f84e7487c5a', 'demo_access', 'badge', NULL, NULL, false, false, true);
		INSERT INTO directus_access (id, role, "user", policy, sort) VALUES ('431d018a-f106-4991-8809-c340bb727825', 'fb9a9ff6-f729-481f-9c27-f152f30d4daa', NULL, '7a8cecea-c679-4eab-9e34-6f84e7487c5a', 1);

		--- SYS IMAGES
		INSERT INTO directus_roles (id, name, icon) VALUES ('81eb7920-c557-47a7-acf3-e8e6b43bf0f2', 'SYS Images', 'supervised_user_circle');
		INSERT INTO directus_users (id, first_name, last_name, email, status, role, provider, email_notifications) VALUES ('bcb9dab2-2138-44fb-be54-41437f2ea6c0', 'SYS', 'Images', 'img@ciso360.ai', 'draft', '81eb7920-c557-47a7-acf3-e8e6b43bf0f2','default', false);
		INSERT INTO directus_policies (id, name, icon, description, ip_access, enforce_tfa, admin_access, app_access) VALUES ('f3e5132c-c7f7-44e1-acd3-20c58988ed45', 'sys_images', 'badge', NULL, NULL, false, false, false);
		INSERT INTO public.directus_access (id, role, "user", policy, sort) VALUES ('0db5066d-c643-40d9-bf2c-0aeaf71f3f77', '81eb7920-c557-47a7-acf3-e8e6b43bf0f2', NULL, 'f3e5132c-c7f7-44e1-acd3-20c58988ed45', 1);

		--- SYS IMPORT
		INSERT INTO directus_roles (id, name, icon) VALUES ('fad680e9-8fed-47be-9952-fcecda4bac9d', 'SYS Import', 'supervised_user_circle');
		INSERT INTO directus_users (id, first_name, last_name, email, status, role, provider, email_notifications) VALUES ('e369b7a3-d363-4656-929d-f8ff78bac20d', 'SYS', 'Import', 'import@ciso360.ai', 'draft', 'fad680e9-8fed-47be-9952-fcecda4bac9d','default', false);
		INSERT INTO directus_policies (id, name, icon, description, ip_access, enforce_tfa, admin_access, app_access) VALUES ('37c193ed-1b56-4638-95c4-ca9099dfeb4f', 'sys_import', 'badge', NULL, NULL, false, false, false);
		INSERT INTO public.directus_access (id, role, "user", policy, sort) VALUES ('54621e00-2edc-4de7-a60b-abe2516a3dad', 'fad680e9-8fed-47be-9952-fcecda4bac9d', NULL, '37c193ed-1b56-4638-95c4-ca9099dfeb4f', 1);

	`)},

	async down(knex) {
		await knex.schema.dropTable('test1');
	},
};
