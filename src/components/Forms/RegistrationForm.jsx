import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegistrationForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  function inputChangeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });

    // setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }

  function resetForm(e) {
    e.preventDefault();
    setData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  }

  async function saveRegisteredUsers(e) {
    e.preventDefault();
    console.log(data);

    try {
      const response = await fetch("http://localhost:4200/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Successfully registered");

        setData({
          name: "",
          email: "",
          phone: "",
          address: "",
        });
        console.log("After reset:", data);
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error("Error occured while registering user", error);
    }
  }
  return (
    <div>
      <div
        className="AppContainer mt-5"
        style={{
          width: "30%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid black",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h3
          style={{ textAlign: "center", background: "green", color: "white" }}
        >
          User Registration
        </h3>
        <form>
          <div className="form-group mt-2">
            <label>Name </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={data.name}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group mt-2">
            <label>E-Mail </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={data.email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group mt-2">
            <label>Phone Number </label>
            <input
              type="phone"
              className="form-control"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group mt-2">
            <label>Address </label>
            <input
              type="address"
              className="form-control"
              id="address"
              name="address"
              value={data.address}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <button
                className="btn btn-primary col-md-12 mt-2"
                onClick={saveRegisteredUsers}
              >
                Submit
              </button>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-danger col-md-12 mt-2"
                onClick={resetForm}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;

// Form Handling with fetch api request

// Toaster message
//npm install react-toastify
//import { toast, ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
//<ToastContainer />
