import axios from 'axios';

const UserList = ({ users, refreshUsers, setSelectedUser }) => {
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
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
