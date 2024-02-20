import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import SkillPost from './Pages/SkillPost';
import ReferencesPage from './Pages/References';
import About from './Pages/About';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZyk3yG91rxlzmW6D3Fq6H9Zd4Ty-lLZc",
  authDomain: "portfolio-f2472.firebaseapp.com",
  projectId: "portfolio-f2472",
  storageBucket: "portfolio-f2472.appspot.com",
  messagingSenderId: "431158558745",
  appId: "1:431158558745:web:a10196a0ca6bd7ad9c2a88",
  measurementId: "G-G8JV9CQW5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// App component responsible for routing and rendering the application
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define route for the Home page */}
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/skill/:skill" exact element={<SkillPost />}></Route>
        <Route path="/references" exact element={<ReferencesPage />}></Route>
        <Route path="/about" exact element={<About />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App; // Export the App component
