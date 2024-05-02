import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import { Dashboard } from "./pages/dashboard/Dashboard.jsx";
import DashboardComponent from "./components/Dashboard.jsx";
import Users from "./pages/dashboard/Users.jsx";

import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { AuthProvider } from "./hooks/useAuth.jsx";
import Categories from "./pages/Categories.jsx";
import Trainers from "./pages/dashboard/Trainers.jsx";
import Workouts from "./pages/dashboard/Wrokouts.jsx";
import Nutrition from "./pages/dashboard/Nutrition.jsx";
import Packages from "./pages/dashboard/Packages.jsx";
import Categories1 from "./pages/dashboard/Categories.jsx";
import WorkoutCategories from "./pages/dashboard/WorkoutCategories.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/categories" element={<Categories1 />} />
          <Route path="/dashboard/trainers" element={<Trainers />} />
          <Route path="/dashboard/workouts" element={<Workouts />} />
          <Route path="/dashboard/nutrition" element={<Nutrition />} />
          <Route path="/dashboard/packages" element={<Packages />} />
          <Route
            path="/dashboard/workoutcategories"
            element={<WorkoutCategories />}
          />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
