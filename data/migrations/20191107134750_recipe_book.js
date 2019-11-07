
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl=>{
        tbl.increments();
        tbl.string('name',255).notNullable();
    })
    .createTable('ingredients', tbl=>{
        tbl.increments();
        tbl.string('name').notNullable()
    })
    .createTable('recipes_ingredients', tbl=>{
        tbl.increments();
        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        tbl
        .integer('ingredients_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        tbl.integer('quantity').notNullable()
        tbl.string('amount',255).notNullable()
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
