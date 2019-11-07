
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'burger'},
        {id: 2, name: 'pizza'},
        {id: 3, name: 'spaghetti'},
        {id: 4, name: 'wings'}
      ]);
    });
};
