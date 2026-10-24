
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    alert("Login demo successful!");
    navigate("/dashboard");
  }

  return (
    <main className="auth-wrapper">
      <section className="auth-card">
        <div className="auth-icon">↗</div>
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Login to your account</h1>
        <p className="auth-description">
          Enter your details to continue.
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <button className="btn btn-primary form-button" type="submit">
            Login →
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </section>
    </main>
  );
}
