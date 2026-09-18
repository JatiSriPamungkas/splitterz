import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/(auth)/login/Login";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/(auth)/register/Register";

function App() {
    return (
        <>
            <div className="min-h-screen flex justify-center sm:items-center bg-blue-300/15 p-8 ">
                <Routes>
                    <Route path="/login" Component={Login} />
                    <Route path="/register" Component={Register} />

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
