import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Contact = () => {
  const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
  };

  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user, API } = useAuth();

  // if (userData && user) {
  //   setContact({ username: user.username, email: user.email, message: "" });

  //   setUserData(false);
  // }

  useEffect(() => {
    if (user) {
      setContact((prev) => ({
        ...prev,
        username: user.username || "",
        email: user.email || "",
      }));
    }
  }, [user]); // ✅ Runs whenever user data updates

  // handleInput :-
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setContact({
      ...contact,
      [name]: value,
    });

    // setContact((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  };

  // handleSubmit :-
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Message send successfully");
      }
    } catch (error) {
      toast.error("Message not found");
      console.log(error);
    }

    // console.log(contact);
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>

        {/* contact page section */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="contact image" />
          </div>

          {/* contact content actual */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  cols="90"
                  rows="5"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                ></textarea>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86724368071!2d85.06064092800626!3d25.608169162838674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1741660970348!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
