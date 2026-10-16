function Signup() {
  return (
    <main className="auth-page">

      <div className="auth-box">

        <div className="auth-icon">✈️</div>

        <h1>Create Account</h1>
        <p>Start your journey with FlyEasy.</p>

        <form>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
          />

          <button type="submit">
            Create Account
          </button>

        </form>

      </div>

    </main>
  );
}

export default Signup;