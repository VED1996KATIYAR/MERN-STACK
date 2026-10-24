
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>

        <h1>
          Navigate your world.
          <br />
          <span>One route at a time.</span>
        </h1>

        <p className="hero-description">
          A simple and modern web application built with React
          Router. Explore pages, discover features, and get started.
        </p>

        <div className="hero-actions">
          <Link to="/dashboard" className="btn btn-primary">
            Explore Dashboard →
          </Link>

          <Link to="/signup" className="btn btn-secondary">
            Create Account
          </Link>
        </div>

        <div className="hero-stats">
          <div>
            <h3>04</h3>
            <p>Pages</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Responsive</p>
          </div>
          <div>
            <h3>React</h3>
            <p>Powered by</p>
          </div>
        </div>
      </div>
    </main>
  );
}
