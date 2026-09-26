import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      // API call will come here
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log({
        email,
        password,
        rememberMe,
      });

      alert("Login successful!");
    } catch (error) {
      setLoginError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="left-panel">

        <div className="brand">
          <span>React</span>
        </div>

        <div className="welcome">
          <h1>Welcome Back!</h1>

          <p>
            Sign in to your account and
            <br />
            continue your journey.
          </p>
        </div>

        <div className="security-image">
          <div className="security-box">🔒</div>
        </div>

        <div className="features">
          <div>
            <span>🛡</span>
            Secure Authentication
          </div>

          <div>
            <span>⚡</span>
            Fast & Reliable
          </div>

          <div>
            <span>♡</span>
            Built with React
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="right-panel">

        <div className="login-card">

          <h2>Login</h2>

          <p className="description">
            Enter your email and password to access your account.
          </p>

          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="form-group">

              <label>
                Email Address <span>*</span>
              </label>

              <div
                className={`input-box ${
                  errors.email ? "input-error" : ""
                }`}
              >
                <span className="input-icon">✉</span>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: "" });
                  }}
                />

                {email && !errors.email && (
                  <span className="success-icon">✓</span>
                )}
              </div>

              {errors.email && (
                <p className="error-text">
                  {errors.email}
                </p>
              )}

              {email && !errors.email && (
                <p className="valid-text">
                  ✓ Valid email address
                </p>
              )}

            </div>

            {/* PASSWORD */}
            <div className="form-group">

              <label>
                Password <span>*</span>
              </label>

              <div
                className={`input-box ${
                  errors.password ? "input-error" : ""
                }`}
              >

                <span className="input-icon">🔒</span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: "" });
                  }}
                />

                <button
                  type="button"
                  className="eye-button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁"}
                </button>

              </div>

              {errors.password ? (
                <p className="error-text">
                  {errors.password}
                </p>
              ) : (
                <p className="password-info">
                  ✓ Password must be at least 8 characters
                </p>
              )}

            </div>

            {/* OPTIONS */}
            <div className="options">

              <label className="remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                />

                <span>Remember me</span>
              </label>

              <a href="#" className="forgot">
                Forgot password?
              </a>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>

            {/* API ERROR */}
            {loginError && (
              <div className="login-error">
                ⚠ {loginError}
              </div>
            )}

          </form>

          <div className="divider">
            <span></span>
            <b>OR</b>
            <span></span>
          </div>

          <p className="signup">
            Don't have an account?
            <a href="#"> Sign up</a>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;