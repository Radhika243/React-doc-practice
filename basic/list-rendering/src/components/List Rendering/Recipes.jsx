import React from "react";
import {recipes} from './data'
// id: 'greek-salad',
//     name: 'Greek Salad',
//     ingredients:
function Recipes(){
  return(
   <>
    <h2>Recipes List</h2>
    <ul>
      {
        recipes.map((recipe)=>
          <div key={recipe.id}>
            <h3 key={recipe.id}>{recipe.name}</h3>
            
              {
                recipe.ingredients.map((ingredient)=>{
                  return <li key={ingredient}>{ingredient}</li>
                })
              }
           
          </div>
          
        )
      }
    </ul>
   </>

  )
}

export default Recipes;