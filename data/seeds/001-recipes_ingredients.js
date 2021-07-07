exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {id: 1, ingredients_id: 1, recipe_id: 1, quantity: 2, amount: 'each'},
        {id: 2, ingredients_id: 2, recipe_id: 1, quantity: 12, amount: 'oz'},
        {id: 3, ingredients_id: 3, recipe_id: 1, quantity: 2, amount: 'each'},
        {id: 4, ingredients_id: 4, recipe_id: 1, quantity: 3, amount: 'each'},
        {id: 5, ingredients_id: 5, recipe_id: 1, quantity: 2, amount: 'each'}
      ])
    })
}