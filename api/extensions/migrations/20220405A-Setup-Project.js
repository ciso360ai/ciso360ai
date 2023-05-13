module.exports = {
	async up(knex) {
        await knex.schema.raw(`
		INSERT INTO directus_settings (id, project_name, project_url, project_color, project_logo, public_foreground, public_background, public_note, auth_login_attempts, auth_password_policy, storage_asset_transform, storage_asset_presets, custom_css, storage_default_folder, basemaps, mapbox_key, module_bar, project_descriptor, translation_strings, default_language) VALUES (1, 'CISO360.AI', NULL, '#FFFFFF', NULL, NULL, NULL, '© CISO360.AI 2023', 10, NULL, 'none', NULL, '', NULL, NULL, NULL, '[{"type":"module","id":"insights","enabled":true},{"type":"module","id":"content","enabled":true},{"type":"module","id":"users","enabled":true},{"type":"module","id":"files","enabled":true},{"type":"module","id":"docs","enabled":false},{"type":"module","id":"settings","enabled":true,"locked":true}]', 'Looking for trouble...', NULL, 'en-US');
		`)},

	async down(knex) {
		await knex.schema.dropTable('test1');
	},
};
