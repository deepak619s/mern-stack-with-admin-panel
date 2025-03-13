import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS, API } = useAuth();

  const URL = `${API}/api/auth/login`;

  // Handling the input values :-
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handling the form submit :-
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("Login Response", response);

      const res_data = await response.json();

      if (response.ok) {
        // alert("Login Successfull");

        // stored the token in localhost :-
        storeTokenInLS(res_data.token);

        setUser({
          email: "",
          password: "",
        });
        toast.success("Login Sucessfull");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        console.log("Invalid Credentials");
      }
    } catch (error) {}
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img src="/images/login.png" alt="login image" />
              </div>

              {/* Registration Form  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />

                <form onSubmit={handleSubmit} className="login-register-form">
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />

                  <button type="submit" className="btn btn-submit">
                    Login Here
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
