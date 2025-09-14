import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm('Are you sure you want to delete this recipe?');
    if (!ok) return;

    deleteRecipe(recipeId);
    // After delete, navigate back to home/list
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ background: '#f44336', color: 'white', border: 'none', padding: '8px 12px', borderRadius: 4 }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
