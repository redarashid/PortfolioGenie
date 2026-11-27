// src/pages/LogoutPage.tsx
import { useNavigate } from "react-router-dom";
import Logout from "../components/Logout/LogoutPage";

export default function LogoutPage() {
  const navigate = useNavigate();

  return (
    <Logout
      onSignIn={() => navigate("/login")}
      onGithub={() => navigate("/login")} // مؤقتًا لحد ما GitHub OAuth يتظبط
    />
  );
}