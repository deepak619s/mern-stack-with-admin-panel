import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUsers, FaEnvelope, FaCogs, FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";
import { AdminHome } from "../../pages/Admin-Home";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log(user);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-menu">
          <NavLink
            to="/admin/users"
            className="sidebar-link"
            activeClassName="active"
          >
            <FaUsers className="sidebar-icon" />
            <span>Users</span>
          </NavLink>

          <NavLink
            to="/admin/contacts"
            className="sidebar-link"
            activeClassName="active"
          >
            <FaEnvelope className="sidebar-icon" />
            <span>Contact</span>
          </NavLink>

          <NavLink
            to="/admin/services"
            className="sidebar-link"
            activeClassName="active"
          >
            <FaCogs className="sidebar-icon" />
            <span>Services</span>
          </NavLink>

          <NavLink
            to="/admin/home"
            className="sidebar-link"
            activeClassName="active"
          >
            <FaHome className="sidebar-icon" />
            <span>Home</span>
          </NavLink>
        </div>
      </div>

      <Outlet></Outlet>
    </>
  );
};
