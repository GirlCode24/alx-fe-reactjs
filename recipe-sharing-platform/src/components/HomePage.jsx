import { Link } from "react-router-dom";

const HomePage = ({ recipes }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      {/* Add recipe button */}
      <div className="text-center mb-6">
        <Link
          to="/add-recipe"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          + Add New Recipe
        </Link>
      </div>

      {/* Recipe grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transform transition duration-200"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>

              <Link to={`/recipe/${recipe.id}`}>
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
