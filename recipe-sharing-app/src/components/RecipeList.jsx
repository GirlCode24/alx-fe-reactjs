import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet. Add one below!</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            padding: '12px',
            marginBottom: '10px',
            borderRadius: 6,
          }}
        >
          <h3 style={{ margin: '0 0 8px 0' }}>{recipe.title}</h3>
          <p style={{ margin: '0 0 8px 0' }}>
            {recipe.description?.length > 120
              ? `${recipe.description.slice(0, 120)}…`
              : recipe.description}
          </p>
          <Link to={`/recipes/${recipe.id}`}>View details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
