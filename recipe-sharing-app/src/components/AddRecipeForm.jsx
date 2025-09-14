import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    // Use Date.now() as id (number)
    addRecipe({ id: Date.now(), title: title.trim(), description: description.trim() });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', width: '100%', padding: 8, marginBottom: 8 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', width: '100%', padding: 8, marginBottom: 8 }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
