module.exports = {
	async up(knex) {
        await knex.schema.raw(`
UPDATE directus_settings SET
project_name = 'CISO360.AI',
project_url = NULL,
project_color = '#FFFFFF',
project_logo = NULL,
public_foreground = NULL,
public_background = NULL,
public_note = '© CISO360.AI 2025',
auth_login_attempts = 10,
auth_password_policy = NULL,
storage_asset_transform = 'none',
storage_asset_presets = NULL,
custom_css = 'body:not(.user-is-tabbing) * { user-select: text;}
#app, #main-content, body {  --v-button-background-color: #6644FF !important;  --v-button-background-color-hover: #5E41EC !important;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > div:nth-child(9) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > a:nth-child(10) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > a:nth-child(11) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > a:nth-child(12) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > a:nth-child(13) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > div:nth-child(14) {display: none;}
#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > ul > a.v-list-item.link.version {display: none;}',
storage_default_folder = NULL,
basemaps = NULL,
mapbox_key = NULL,
module_bar = '[{"type":"module","id":"insights","enabled":true},{"type":"module","id":"content","enabled":true},{"type":"module","id":"users","enabled":true},{"type":"module","id":"files","enabled":true},{"type":"module","id":"settings","enabled":true,"locked":true}]',
project_descriptor = 'Looking for trouble...',
default_language = 'en-US',
custom_aspect_ratios = NULL,
public_favicon = NULL,
default_appearance = 'auto',
default_theme_light = 'Directus Default',
theme_light_overrides = '{"primary":"#6644FF"}',
default_theme_dark = 'Directus Default',
theme_dark_overrides = '{"primary":"#6644FF"}',
report_error_url = 'https://github.com/ciso360ai/ciso360ai/issues/new',
report_bug_url = 'https://github.com/ciso360ai/ciso360ai/issues/new',
report_feature_url = 'https://github.com/ciso360ai/ciso360ai/issues/new',
public_registration = false,
public_registration_verify_email = true,
public_registration_role = NULL,
public_registration_email_filter = NULL,
visual_editor_urls = NULL,
accepted_terms = true,
project_id = '019aa897-ca2f-76cd-bb11-f00e503f0ca5'
WHERE id = 1;
`)},

	async down(knex) {
		await knex.schema.dropTable('test1');
	},
};
