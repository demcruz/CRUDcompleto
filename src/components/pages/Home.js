import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse())
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`)
    loadUser()
  }

  useEffect(() => {
    loadUser();
  },[]);

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>

        <table className="table table-light border shadow">
          <thead className="table">
            <th className="light" scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">email</th>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index++}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                <Link className="btn btn-primary" to={`/users/${user.id}`}>View </Link>
                    <Link className="btn btn-outline-primary" to={`/users/edit/${user.id}`}>Edit </Link>
                    <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
