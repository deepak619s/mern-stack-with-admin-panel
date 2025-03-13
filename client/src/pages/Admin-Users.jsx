import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () => {
    try {
      console.log("Auth Token:", authorizationToken);

      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log("Response from API:", data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch users");
      }

      if (Array.isArray(data)) {
        setUsers(data);
      }
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  // handle the user data on delete button :-
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("user after delete", data);

      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <div className="users-page">
      <h1>Admin Users Data</h1>
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => (
              <tr key={index}>
                <td>{curUser.username}</td>
                <td>{curUser.email}</td>
                <td>{curUser.phone}</td>
                <td>
                  <Link to={`/admin/users/${curUser._id}/edit`}>
                    <button>Edit</button>
                  </Link>
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteUser(curUser._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
