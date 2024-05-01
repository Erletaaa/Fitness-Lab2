import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', hashedPassword: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editUser, setEditUser] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7143/api/Users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const addUser = () => {
        axios.post('https://localhost:7143/api/Users', newUser)
            .then(response => {
                setUsers([...users, response.data]);
                setNewUser({ name: '', email: '', hashedPassword: '' });
            })
            .catch(error => {
                console.error('Error adding user:', error);
            });
    };

    const deleteUser = (id) => {
        axios.delete(`https://localhost:7143/api/Users/${id}`)
            .then(() => {
                setUsers(users.filter(user => user.usersID !== id));
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };

    const saveEdit = () => {
        axios.put(`https://localhost:7143/api/Users/${editUser.usersID}`, editUser)
            .then(() => {
                setIsEditing(false);
                setEditUser(null);
            })
            .catch(error => {
                console.error('Error saving user:', error);
            });
    };

    return (
        <div>
            <h1>Users Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.usersID}>
                            <td>{user.usersID}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.hashedPassword}</td>
                            <td>
                                {isEditing && editUser && editUser.usersID === user.usersID ? (
                                    <button onClick={saveEdit}>Save</button>
                                ) : (
                                    <button onClick={() => { setIsEditing(true); setEditUser(user); }}>Edit</button>
                                )}
                                <button onClick={() => deleteUser(user.usersID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td><input type="text" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} /></td>
                        <td><input type="text" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} /></td>
                        <td><input type="text" value={newUser.hashedPassword} onChange={(e) => setNewUser({ ...newUser, hashedPassword: e.target.value })} /></td>
                        <td><button onClick={addUser}>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Users;
