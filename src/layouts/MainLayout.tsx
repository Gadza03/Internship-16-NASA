import Navbar from "../components/nav-bar/Navbar";
import { Outlet } from "react-router";
export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
