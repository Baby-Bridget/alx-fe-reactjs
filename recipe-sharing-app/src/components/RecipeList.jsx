import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  if (!displayRecipes || displayRecipes.length === 0) {
    return <p>No recipes yet.</p>;
  }

  return (
    <div>
      {displayRecipes.map(recipe => (
        <div
          key={recipe.id}
          style={{ border: '1px solid #ddd', padding: '8px', marginBottom: '8px' }}
        >
          <h3>
            <Link to={/recipe/${recipe.id}}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;