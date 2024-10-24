import { useEffect, useState } from "react";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import axios from "./api/axios";
import { UserProvider } from "./context/UserContext";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getUsers();
  }, []);
  return (
    <UserProvider>
      <Dropdown users={users} />
      <Card />
    </UserProvider>
  );
}

export default App;
