exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'bun'},
        {id: 2, name: 'patty'},
        {id: 3, name: 'cheese'},
        {id: 4, name: 'lettuce'},
        {id: 5, name: 'tomato'}
      ]);
    });
 };