import { create } from 'zustand';

export const useRecipeStore = create((set) => ({

  recipes: [
    { id: 1, title: 'Spaghetti Aglio e Olio', description: 'Garlic, olive oil, chili flakes, parsley.' },
    { id: 2, title: 'Simple Pancakes', description: 'Flour, milk, egg, baking powder, sugar.' }
  ],

  // Add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Update an existing recipe (expects full object with id)
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        // allow string/number id comparisons
        r.id === updatedRecipe.id || String(r.id) === String(updatedRecipe.id)
          ? { ...r, ...updatedRecipe }
          : r
      ),
    })),

  // Delete by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => !(r.id === id || String(r.id) === String(id))),
    })),

  // Replace whole list (optional)
  setRecipes: (recipes) => set({ recipes }),
}));
