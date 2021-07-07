const express = require('express');

const recipeRouter = express.Router()

const db = require('../db-config')

function getRecipes(){
     return db('recipes')
}

function getShoppingList(recipe_id){
    return db('ingredients as i')
    .join('recipes_ingredients as ri', 'i.id', 'ri.ingredients_id')
    .where("ri.recipe_id",'=', recipe_id )
    .select('i.name', 'ri.quantity', 'ri.amount ')

}

function getInstructions(recipe_id){
    return db('recipe_steps as ri')
    .join('recipes as r', 'r.id', 'ri.recipes_id')
    .where("r.id",'=', recipe_id )
    .select('ri.step', 'ri.instructions')

}

recipeRouter.get('/', (req,res)=>{
    //working!
    getRecipes()
    .then(data=>res.status(201).json(data))
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"something went wrong"})})
})

recipeRouter.get('/:id', (req,res)=>{
    //working
    getShoppingList(req.params.id)
    .then(list=>{res.status(201).json(list)})
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:'something went wrong'})
    })
})

recipeRouter.get('/:id/instructions', (req,res)=>{
    //working
    getInstructions(req.params.id)
    .then(instructions=>res.status(201).json(instructions))
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"something went wrong"})
    })
})


module.exports = recipeRouter
