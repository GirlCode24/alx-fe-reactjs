import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function Home() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>My Recipe App</h1>
      <AddRecipeForm />
      <hr style={{ margin: '20px 0' }} />
      <RecipeList />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12, borderBottom: '1px solid #eee', marginBottom: 12 }}>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        {/* You can add more routes e.g. /create or /edit/:id if you want separate pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
