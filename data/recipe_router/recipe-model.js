
const db = require('../db-config')

function getRecipes(){
     return db('recipes')
}

function getShoppingList(recipe_id){
    return db('ingredients as i')
    .join('recipes_ingredients as ri', 'i.id', 'ri.ingredients_id')
    .where("ri.recipe_id",'=', id )
    .select('i.name', 'ri.quantity', 'ri.amount ')

}

function getInstructions(recipe_id){
    return db('recipe_steps as ri')
    .join('recipes as r', 'r.id', 'ri.recipes_id')
    .where("r.id",'=', id )
    .select('ri.steps', 'ri.instructions')

}

getInstructions(1)
