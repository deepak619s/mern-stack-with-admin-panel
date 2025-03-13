import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data", data);

      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json(); // Parse the response body
      console.log("Delete response:", data);

      if (response.ok) {
        getContactsData();
        toast.success("Deleted successfully");
      } else {
        toast.error("Not Deleted ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <section className="admin-contact-section">
      <h2>Admin Contact Panel</h2>
      {contactData.length === 0 ? (
        <p>No contact messages available.</p>
      ) : (
        <table className="contact-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((curContactData, index) => {
              const { username, email, message, _id } = curContactData;
              return (
                <tr key={index}>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{message}</td>
                  <td>
                    <button
                      className="admin-delete-btn"
                      onClick={() => deleteContactById(_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
};
