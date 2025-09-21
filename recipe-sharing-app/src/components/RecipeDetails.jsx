import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => String(r.id) === String(id))
  );

  const [editing, setEditing] = useState(false);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>{recipe.title}</h1>
      <p style={{ whiteSpace: 'pre-wrap' }}>{recipe.description}</p>

      <div style={{ marginTop: 16 }}>
        <button onClick={() => setEditing((s) => !s)} style={{ marginRight: 8 }}>
          {editing ? 'Cancel edit' : 'Edit recipe'}
        </button>

        <DeleteRecipeButton recipeId={recipe.id} />
        <Link to="/" style={{ marginLeft: 12 }}>
          Back to list
        </Link>
      </div>

      {editing && (
        <div style={{ marginTop: 16 }}>
          <EditRecipeForm recipeId={recipe.id} onDone={() => setEditing(false)} />
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
