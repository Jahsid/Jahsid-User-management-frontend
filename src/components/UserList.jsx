import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const UserList = ({ users, refreshUsers, setSelectedUser }) => {
  const deleteUser = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    refreshUsers();
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id} className="flex justify-between p-2">
          <div>
            {user.firstName} {user.lastName} - {user.email}
          </div>
          <div>
            <button className="text-blue-500" onClick={() => setSelectedUser(user)}>
              Edit
            </button>
            <button className="text-red-500 ml-2" onClick={() => deleteUser(user._id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
