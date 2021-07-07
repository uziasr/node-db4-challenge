exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {id: 1, recipes_id: 1, instructions: 'Make sure you grab two buns', step: 1},
        {id: 2, recipes_id: 1, instructions: 'Second cook the meat and season it', step: 2},
        {id: 3, recipes_id: 1, instructions: 'Third throw a piece of cheese on the patty', step: 3},
        {id: 4, recipes_id: 1, instructions: 'Fourth, put one slice of tomato on the cheese', step: 4},
        {id: 5, recipes_id: 1, instructions: 'Fifth, put the lettuce on the tomato', step: 5},
      ]);
    });
 };
