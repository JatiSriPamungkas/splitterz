import { Link, Route, Routes } from "react-router-dom";
import Login from "../pages/(auth)/login/Login";

export default function MainLayout() {
  return (
    <>
      <div>
        <nav>
          <Link to="/login">Login</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/login" Component={Login} />
          </Routes>
        </main>
      </div>
    </>
  );
}
