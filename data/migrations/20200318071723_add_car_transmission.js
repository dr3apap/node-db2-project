exports.up = function (knex) {
    return knex.schema.table('cars', table => {
        table.string('transmission',
            128);
    });
};

exports.down = function (knex) {
    return knex.schema.table('cars', table => {
        table.dropColumn('transmission');
    })
};
