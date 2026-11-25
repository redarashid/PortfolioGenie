import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomeHero from "./components/Home/HomeHero";
import MyPortfolioPage from "./pages/MyPortfolioPage";
import HomePage from "./components/Home/HomeHero";
import FolioAIPage from "./pages/FolioAIPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<HomeHero />} />
      <Route path='/ai' element={<FolioAIPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/my-portfolio' element={<MyPortfolioPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
