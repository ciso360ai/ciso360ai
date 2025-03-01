module.exports = {
	async up(knex) {
        await knex.schema.raw(`
INSERT INTO directus_settings (id, project_name, project_url, project_color, project_logo, public_foreground, public_background, public_note, auth_login_attempts, auth_password_policy, storage_asset_transform, storage_asset_presets, custom_css, storage_default_folder, basemaps, mapbox_key, module_bar, project_descriptor, default_language, custom_aspect_ratios, public_favicon, default_appearance, default_theme_light, theme_light_overrides, default_theme_dark, theme_dark_overrides, report_error_url, report_bug_url, report_feature_url) VALUES (1, 'CISO360.AI', NULL, '#FFFFFF', NULL, NULL, NULL, '© CISO360.AI 2024', 10, NULL, 'none', NULL, '.header-bar .title-container .title { user-select: text;}
#app, #main-content, body {  --v-button-background-color: #6644FF !important;  --v-button-background-color-hover: #5E41EC !important;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > div:nth-child(9) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > a:nth-child(10) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > a:nth-child(11) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > a:nth-child(12) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > a:nth-child(13) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > div:nth-child(14) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > a.v-list-item.link.version {display: none;}', NULL, NULL, NULL, '[{"type":"module","id":"insights","enabled":true},{"type":"module","id":"content","enabled":true},{"type":"module","id":"users","enabled":true},{"type":"module","id":"files","enabled":true},{"type":"module","id":"settings","enabled":true,"locked":true}]', 'Looking for trouble...', 'en-US', NULL, NULL, 'auto', NULL, '{"primary":"#6644FF"}', NULL, '{"primary":"#6644FF"}', 'https://github.com/ciso360ai/ciso360ai/issues/new', 'https://github.com/ciso360ai/ciso360ai/issues/new', 'https://github.com/ciso360ai/ciso360ai/issues/new');
`)},

	async down(knex) {
		await knex.schema.dropTable('test1');
	},
};
