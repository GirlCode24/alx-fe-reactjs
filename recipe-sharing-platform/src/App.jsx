import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import recipeData from "./data.json";  
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]); // add new recipes dynamically
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route
          path="/add-recipe"
          element={<AddRecipeForm onAddRecipe={handleAddRecipe} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
