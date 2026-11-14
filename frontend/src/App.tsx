import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import HomeHero from "./components/Home/HomeHero";
import MyPortfolioPage from "./pages/MyPortfolioPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<HomeHero />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/my-portfolio' element={<MyPortfolioPage />} />
    </Routes>
  );
}

export default App;
