import './App.css'
import Search from "./components/Search";
import SearchBar from './components/SearchBar';
import Results from './components/Results';


function App() {


  return (
    <>
     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>
      <Search />
    </div>
    </>
  )
}

export default App
