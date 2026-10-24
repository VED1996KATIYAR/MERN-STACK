
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  function handleSignup(event) {
    event.preventDefault();
    alert("Signup demo successful!");
    navigate("/login");
  }

  return (
    <main className="auth-wrapper">
      <section className="auth-card">
        <div className="auth-icon">✦</div>
        <p className="eyebrow">GET STARTED</p>
        <h1>Create your account</h1>
        <p className="auth-description">
          Join us and explore your new dashboard.
        </p>

        <form onSubmit={handleSignup}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            required
          />

          <label htmlFor="signup-email">Email address</label>
          <input
            id="signup-email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            minLength={6}
            placeholder="At least 6 characters"
            required
          />

          <button className="btn btn-primary form-button" type="submit">
            Create Account →
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}
