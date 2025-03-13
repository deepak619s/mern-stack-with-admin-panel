import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();

  return (
    <div className="about-container">
      <p>
        Welcome, {user ? `${user.username} to our website` : `to our website`}
      </p>

      <header className="about-header">
        <h1 className="header-title">
          About <span className="highlight">Our Journey</span>
        </h1>
        <p className="header-subtitle">
          Building the Future with MERN Stack Excellence
        </p>
      </header>

      <Analytics></Analytics>

      <div className="timeline">
        <h2 className="timeline-title">Our Story</h2>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2023 - The Beginning</h3>
            <p>Started as a passion project to explore MERN capabilities.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2024 - First Milestone</h3>
            <p>Launched our first full-scale MERN application.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2025 - Today</h3>
            <p>Growing stronger, innovating every day.</p>
          </div>
        </div>
      </div>

      {/* <footer className="about-footer">
        <p>Built with ❤️ using the MERN Stack</p>
      </footer> */}
    </div>
  );
};
