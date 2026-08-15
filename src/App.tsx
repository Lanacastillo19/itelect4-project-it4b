import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import SubmissionsPage from "./components/SubmissionsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="submissions" element={<SubmissionsPage />} />
      </Route>
    </Routes>
  );
}
