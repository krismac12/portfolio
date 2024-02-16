import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import SkillPost from './Pages/SkillPost';
import ReferencesPage from './Pages/References';

// App component responsible for routing and rendering the application
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define route for the Home page */}
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/skill/:skill" exact element={<SkillPost />}></Route>
        <Route path="/references" exact element={<ReferencesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Export the App component
