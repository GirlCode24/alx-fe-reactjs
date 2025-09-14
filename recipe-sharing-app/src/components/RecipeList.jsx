import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet. Add one below!</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div
            key={recipe.id}
            style={{
              backgroundColor: isFavorite ? "#fff9c4" : "#2d2d2d", // yellowish for favorites, dark gray for normal
              color: isFavorite ? "#000" : "#f5f5f5", // make text readable
              border: isFavorite ? "2px solid gold" : "1px solid #444",
              padding: "16px",
              marginBottom: "12px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>{recipe.title}</h3>
            <p style={{ margin: "0 0 12px 0" }}>
              {recipe.description?.length > 120
                ? `${recipe.description.slice(0, 120)}…`
                : recipe.description}
            </p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/recipes/${recipe.id}`} style={{ color: "#60a5fa" }}>
                View details
              </Link>

              {isFavorite ? (
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  style={{
                    background: "#ef4444", // red
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  ★ Unfavorite
                </button>
              ) : (
                <button
                  onClick={() => addFavorite(recipe.id)}
                  style={{
                    background: "gold",
                    color: "#000",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  ☆ Favorite
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
