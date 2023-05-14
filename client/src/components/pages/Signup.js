import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import { validateEmail } from "../../utils/helpers";

function Signup(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    if (name === "email") {
      !validateEmail(value)
        ? setErrMessage("Valid Email is required!")
        : setErrMessage("");
      return;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.name.trim() === "") {
      setErrMessage("Name is required!");
      return;
    }
    if (formState.email.trim() === "" || !validateEmail(formState.email)) {
      setErrMessage("Valid Email is required!");
      return;
    }
    if (formState.userName.trim() === "") {
      setErrMessage("UserName is required!");
      return;
    }
    if (formState.password.trim().length < 5) {
      setErrMessage("Password should be atleast 5 characters long!");
      return;
    }

    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
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
    <div class= "container">
      <div id="signUp">
        <div class="text-center">
          <h1><u>SignUp</u> </h1>
        </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form onSubmit={handleFormSubmit}>
            <div class="form-group">
              <label for="name">
                <h4 class="">Name:</h4>
              </label>
              <input
                type="text"
                class="form-control "
                name="name"
                aria-describedby="nameHelp"
                onChange={handleInputChange}
              />
            </div>

            <div class="form-group">
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

            <div class="form-group">
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

            <div class="form-group">
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
    
            <div id="register-link" class="">
              <Link to="/Login" class="text-white">
                Login Instead!
              </Link>
            </div>
            <div class="">
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
  </div>
    
    

    );
}

export default Signup;