import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import { Dashboard } from "./pages/dashboard/Dashboard.jsx";
import Test1 from "./pages/dashboard/Test1.jsx";
import Users from "./pages/dashboard/Users.jsx";

import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { AuthProvider } from "./hooks/useAuth.jsx";
import Categories from "./pages/Categories.jsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard/test1" element={<Test1 />} />
          <Route path="/dashboard/Users" element={<Users />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
