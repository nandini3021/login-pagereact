import "./App.css";
import Home from "../src/component/loginpage/Homepage";
import Login from "../src/component/loginpage/Loginpage";
import Register from "../src/component/loginpage/Register";

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { getActiveUser } from "./Localstorage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Private Home Page */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const PrivateRoute = () => {
  const activeUser = getActiveUser();

  if (activeUser == null) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default App;