import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_TICKET} from "../../utils/mutations";
import { validateEmail } from "../../utils/helpers";

function TicketForm(props) {
  const [formState, setFormState] = useState({
    title: "",
    userName: "",
    adminId: "",
    devices: "",
    issues: "",
    status: "New",
  });
  const [errMessage, setErrMessage] = useState("");
  const [addTicket, { error }] = useMutation(ADD_TICKET);

  const handleInputChange = (e) => {
    const { title, value } = e.target;
    setFormState({
      ...formState,
      [title]: value,
    });
    if (title === "") {
      !validateEmail(value)
        ? setErrMessage("Please tell us what trouble you are having")
        : setErrMessage("");
      return;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.title.trim() === "") {
      setErrMessage("Name is required!");
      return;
    }
    if (formState.userName.trim() === "" || !validateEmail(formState.email)) {
      setErrMessage("Valid Email is required!");
      return;
    }
    if (formState.adminId.trim() === "") {
      setErrMessage("UserName is required!");
      return;
    }
    if (formState.devices.trim() === "") {
        setErrMessage("UserName is required!");
        return;
      }
      if (formState.adminId.trim() === "") {
        setErrMessage("UserName is required!");
        return;
      }
      if (formState.adminId.trim() === "") {
        setErrMessage("UserName is required!");
        return;
      }
      if (formState.adminId.trim() === "") {
        setErrMessage("UserName is required!");
        return;
      }

    try {
      const mutationResponse = await addTicket({
        variables: {
          title: formState.title,
          userName: formState.password,
          name: formState.name,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div class="container pt-3 contact" id="signUp">
      <div class="row justify-content-center ">
        <div class="col-md-8">
          <h1 class="text-center">
            <u>SignUp</u>
          </h1>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12 p-2 px-2">
          <form onSubmit={handleFormSubmit}>
            <div class="form-group px-5 p-3">
              <label for="name" class="mb-2">
                <h4>Name:</h4>
              </label>
              <input
                type="text"
                class="form-control "
                name="name"
                aria-describedby="nameHelp"
                onChange={handleInputChange}
              />
            </div>

            <div class="form-group px-5 pb-3">
              <label for="email" class="mb-2">
                <h4>Email Address:</h4>
              </label>
              <input
                type="email"
                class="form-control "
                name="email"
                aria-describedby="emailHelp"
                onChange={handleInputChange}
              />
            </div>

            <div class="form-group px-5 p-3">
              <label for="userName" class="mb-2">
                <h4>Username:</h4>
              </label>
              <input
                type="text"
                class="form-control "
                name="userName"
                onChange={handleInputChange}
              />  
            </div>

            <div class="form-group px-5 p-3">
              <label for="password" class="mb-2">
                <h4>Password:</h4>
              </label>
              <input
                type="password"
                placeholder="******"
                class="form-control "
                name="password"
                onChange={handleInputChange}
              />
            </div>
    
            <div id="register-link" class="text-right mt-1">
              <Link to="/Login" class="text-white">
                Login Instead!
              </Link>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-primary m-3 btn-lg"
                id="contactButton"
              >
                <h5>Submit</h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TicketForm;