import { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipeId, onDone }) => {
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => String(r.id) === String(recipeId))
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');

  // Keep local form in sync if recipe changes
  useEffect(() => {
    setTitle(recipe?.title ?? '');
    setDescription(recipe?.description ?? '');
  }, [recipe]);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe({ id: recipe.id, title: title.trim(), description: description.trim() });
    if (onDone) onDone();
    // optionally navigate back to detail page (already on it)
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', width: '100%', padding: 8, marginBottom: 8 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', width: '100%', padding: 8, marginBottom: 8 }}
      />
      <div>
        <button type="submit">Save changes</button>
        <button type="button" onClick={() => { if (onDone) onDone(); }} style={{ marginLeft: 8 }}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
