import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!summary.trim()) newErrors.summary = "Summary is required.";
    if (!image.trim()) newErrors.image = "Image URL is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Include at least 2 ingredients.";
    if (!steps.trim()) newErrors.steps = "Instructions are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const ingredientsArray = ingredients.split(",").map((i) => i.trim());
    const stepsArray = steps.split("\n").map((s) => s.trim()).filter(Boolean);

    const newRecipe = {
      id: Date.now(),
      title,
      summary,
      image,
      ingredients: ingredientsArray,
      instructions: stepsArray,
    };

    if (onAddRecipe) onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setSummary("");
    setImage("");
    setIngredients("");
    setSteps("");
    setErrors({});

    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Chocolate Cake"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Summary */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Summary</label>
          <textarea
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
            rows="2"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="A short description of the recipe"
          ></textarea>
          {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
        </div>

        {/* Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Image URL</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/recipe.jpg"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Ingredients</label>
          <textarea
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients, separated by commas"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Instructions</label>
          <textarea
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
            rows="5"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Write each step on a new line"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
