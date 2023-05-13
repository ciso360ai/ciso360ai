module.exports = {
	async up(knex) {
        await knex.schema.raw(`
		ALTER TABLE timetable.parameter DROP CONSTRAINT parameter_pkey;
		ALTER TABLE timetable.parameter ADD CONSTRAINT parameter_pkey UNIQUE (order_id,task_id);
		ALTER TABLE timetable.parameter ADD COLUMN IF NOT EXISTS id SERIAL NOT NULL PRIMARY KEY;
		ALTER TABLE timetable.active_session ADD COLUMN IF NOT EXISTS id SERIAL NOT NULL PRIMARY KEY;
		ALTER TABLE timetable.active_chain ADD COLUMN IF NOT EXISTS fakeid SERIAL NOT NULL PRIMARY KEY;
		ALTER TABLE timetable.execution_log ADD COLUMN IF NOT EXISTS fakeid SERIAL NOT NULL PRIMARY KEY;
		ALTER TABLE timetable.execution_log ADD COLUMN IF NOT EXISTS txid INTEGER NOT NULL DEFAULT 0;
		ALTER TABLE timetable.log ADD COLUMN IF NOT EXISTS fakeid SERIAL NOT NULL PRIMARY KEY;
		ALTER TABLE timetable.task ADD CONSTRAINT task_name UNIQUE (chain_id,task_name);
	`)},

	async down(knex) {
		await knex.schema.dropTable('test1');
	},
};
