import { useAuth } from "../store/auth";

export const AdminHome = () => {
  const { user } = useAuth();

  return (
    <div className="admin-home">
      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <h1>Welcome, {user ? user.username : "Admin"}</h1>
          <p className="header-subtitle">
            Manage your dashboard and monitor key metrics.
          </p>
        </header>

        {/* Dashboard Cards */}
        <section className="dashboard">
          <div className="card">
            <h3>Total Users</h3>
            <p className="card-value">150</p>
            <i className="fas fa-users card-icon"></i>
          </div>
          <div className="card">
            <h3>New Contacts</h3>
            <p className="card-value">25</p>
            <i className="fas fa-envelope card-icon"></i>
          </div>
          <div className="card">
            <h3>Active Services</h3>
            <p className="card-value">10</p>
            <i className="fas fa-cogs card-icon"></i>
          </div>
          <div className="card">
            <h3>Pending Actions</h3>
            <p className="card-value">5</p>
            <i className="fas fa-exclamation-triangle card-icon"></i>
          </div>
        </section>
      </main>
    </div>
  );
};
