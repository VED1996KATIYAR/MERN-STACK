
import { Link } from "react-router-dom";

export default function Dashboard() {
  const features = [
    {
      number: "01",
      title: "Easy Navigation",
      description: "Move between pages without reloading the website.",
    },
    {
      number: "02",
      title: "User Access",
      description: "Explore separate login and signup pages.",
    },
    {
      number: "03",
      title: "Modern Design",
      description: "Enjoy a clean and responsive interface.",
    },
  ];

  return (
    <main className="page-container">
      <div className="page-heading">
        <p className="eyebrow">OVERVIEW</p>
        <h1>Your Dashboard</h1>
        <p>Welcome! Everything you need is right here.</p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <span className="feature-number">{feature.number}</span>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>

      <div className="welcome-card">
        <div>
          <h2>Ready to get started?</h2>
          <p>Create your account or sign in to continue.</p>
        </div>

        <div className="hero-actions">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
