import { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ selectedUser, refreshUsers }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      await axios.put(`http://localhost:5000/api/users/${selectedUser._id}`, user);
    } else {
      await axios.post('http://localhost:5000/api/users', user);
    }
    refreshUsers();
    setUser({ firstName: '', lastName: '', phoneNumber: '', email: '', address: '' });
  };

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
        className="border p-2"
        placeholder="First Name"
        required
      />
      <input
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
        className="border p-2"
        placeholder="Last Name"
        required
      />
      <input
        name="phoneNumber"
        value={user.phoneNumber}
        onChange={handleChange}
        className="border p-2"
        placeholder="Phone Number"
        required
      />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        className="border p-2"
        placeholder="Email"
        required
      />
      <input
        name="address"
        value={user.address}
        onChange={handleChange}
        className="border p-2"
        placeholder="Address"
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2" type="submit">
        {selectedUser ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
