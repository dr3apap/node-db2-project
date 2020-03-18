exports.up = function (knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.float('mileage').notNullable();
        table.string('VIN', 255).unique().notNullable();
        table.string('make', 128).notNullable;
        table.integer('model').notNulalble;

    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
