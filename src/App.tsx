import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <div className="min-h-screen bg-blue-300/15 p-8">
        <Routes>
          <Route path="/login" Component={Login} />

          <Route Component={MainLayout}></Route>
        </Routes>
        {/* <nav>
          <Link to="/login">Login</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/login" Component={Login} />
          </Routes>
        </main> */}
      </div>
    </>
  );
}

export default App;
