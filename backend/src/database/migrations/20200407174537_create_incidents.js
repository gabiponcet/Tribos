exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('whatsapp').notNullable();
        table.string('tribe_id').notNullable();
        table.foreign('tribe_id').references('id').inTable('tribe');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};