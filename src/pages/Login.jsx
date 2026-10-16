import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="auth-page">
      <div className="auth-box">
        <div className="auth-icon">✈️</div>

        <h1>Welcome Back</h1>
        <p>Login to continue your journey.</p>

        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <Link to="/" className="login-btn">
            Login
          </Link>
        </form>

        <p>
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
