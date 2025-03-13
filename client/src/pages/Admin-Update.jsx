import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken, API } = useAuth();

  // handle the single user data on update button :-
  const getSingleUserData = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("user single data", data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // to update the data dynamically :-
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Updated successfully");
      } else {
        toast.error("Not Updated ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="update-user-container">
      <h2>Update User Data</h2>
      <form onSubmit={handleSubmit} className="update-user-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handleInput}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleInput}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Mobile</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={handleInput}
            placeholder="Enter your mobile number"
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
