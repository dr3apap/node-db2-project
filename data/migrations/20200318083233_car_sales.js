exports.up = function (knex) {
    return knex.schema.createTable('sales', tbl => {

        tbl.increments();
        tbl.date('sales_date');
        tbl.string('sales_type');
        tbl.time('sales_time');
        tbl.float('sales_amount');
        tbl.integer('cars_id')
            .references('id')
            .inTable('cars')
            .onDelete('CASCADE')
            .index();
        tbl.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('sales')
};
