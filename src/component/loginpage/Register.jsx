
import { useState } from "react";
import { Link } from "react-router-dom";
import { addUser, isUsernameExists } from "/Users/Home/Downloads/Nandini documets/ReacrNandini/my-react-app/src/Localstorage";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    setData({
      ...data,
      [id]: value,
    });

    setMessage("");
  };

  const resetData = () => {
    setData({
      name: "",
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (
      data.name === "" ||
      data.username === "" ||
      data.password === ""
    ) {
      setMessage("Please fill all the fields");
      return;
    }

    if (isUsernameExists(data.username)) {
      setMessage("Can't register. User already exists");
      return;
    }

    addUser(data);

    resetData();

    setMessage("User registered. Jump to Login page");
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form onSubmit={handleFormSubmit}>
        <h3>Register Here</h3>

        {/* Name */}
        <label>Name</label>

        <input
          type="text"
          placeholder="Name"
          id="name"
          value={data.name}
          onChange={handleInputChange}
        />

        {/* Username */}
        <label>Username</label>

        <input
          type="text"
          placeholder="Email"
          id="username"
          value={data.username}
          onChange={handleInputChange}
        />

        {/* Password */}
        <label>Password</label>

        <input
          type="password"
          placeholder="Password"
          id="password"
          value={data.password}
          onChange={handleInputChange}
        />

        {/* Register button */}
        <button type="submit">
          Register
        </button>

        <div className="social">

          {/* Message */}
          {message && <p>{message}</p>}

          <br />

          {/* Login link */}
          <h4>
            <Link to="/login">Login</Link>
          </h4>

        </div>
      </form>
    </>
  );
};

export default Register;