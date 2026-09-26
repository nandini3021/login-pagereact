import { useEffect, useState } from "react";
import { getActiveUser, removeActiveUser } from "/Users/Home/Downloads/Nandini documets/ReacrNandini/my-react-app/src/Localstorage";
import { useNavigate } from "react-router";

const Home = () => {
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    const user = getActiveUser();

    if (user != null) {
      setActiveUser(user);
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    removeActiveUser();
    navigate("/login");
  };

  return (
    <div
      style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 50,
        flexDirection: "column",
      }}
    >
      <div>
        Welcome {activeUser?.name}
      </div>

      <div>
        <button
          onClick={handleLogout}
          style={{ width: 200 }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;