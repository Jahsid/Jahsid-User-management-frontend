import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
const apiUrl = import.meta.env.VITE_API_URL;

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const refreshUsers = async () => {
    try {
      const response = await axios.get(apiUrl);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  useEffect(() => {
    refreshUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Management</h1>
      <UserForm selectedUser={selectedUser} refreshUsers={refreshUsers} />
      <UserList
        users={users}
        refreshUsers={refreshUsers}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
};

export default App;
