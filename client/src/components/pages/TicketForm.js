import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_TICKET } from "../../utils/mutations";
import Login from "./Login";



const Ticket = (props) => {
    const [formState, setFormState] = useState({ title: '', userName: '', adminId: "", devices: "", issues: "", status: "" });
    const [ticket, { error, data }] = useMutation(ADD_TICKET);
    const [isSubmitted, setisSubmitted] = useState(false);
  console.log(formState)
    // update state based on form input changes
    const handleChange = (event) => {
      const { id, value } = event.target;
      console.log(event.target)
      setFormState({
        ...formState,
        [id]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await ticket({
          variables: formState ,
        });
        setisSubmitted(true)
        
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        title: '',
        userName: '',
        adminId: 'Main',
        devices: '',
        issues: '',
        status: 'Open'
      });
    };
  
    
    return (
      isSubmitted ? (
      
        <div className="container">
          <h1>Thanks for submitting your ticket. Please check its status in the Open Tickets tab!</h1>
        </div>
      ) : 
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">A brief description of your issue:</label>
              <input type="text" className="form-control" id="title" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">Which user is having the problem?</label>
              <input type="text" className="form-control" id="userName" onChange={handleChange} />
            </div>
            <fieldset className="mb-3">
              <legend className="col-form-label">Which device does this impact?</legend>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="computer" onChange={handleChange} value="Computer" />
                <label className="form-check-label" htmlFor="computer">Computer</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="phone" onChange={handleChange} value="Phone" />
                <label className="form-check-label" htmlFor="phone">Phone</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="other" onChange={handleChange} value="Other" disabled />
                <label className="form-check-label" htmlFor="other">Other</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="techSupport" onChange={handleChange} value="Tech Support" disabled />
                <label className="form-check-label" htmlFor="techSupport">Please assign to tech support</label>
              </div>
            </fieldset>
            <fieldset className="mb-3">
              <legend className="col-form-label">Which type of issue are you having?</legend>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios2" id="internet" onChange={handleChange} value="Internet Connection" />
                <label className="form-check-label" htmlFor="internet">Internet Connection</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios2" id="hardware" onChange={handleChange} value="Hardware Malfunction" />
                <label className="form-check-label" htmlFor="hardware">Hardware Malfunction</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios2" id="other2" onChange={handleChange} value="Other" />
                <label className="form-check-label" htmlFor="other2">Other</label>
              </div>
            </fieldset>
            <div className="mb-3">
              <div className="form-check">
              <input className="form-check-input" type="checkbox" id="status" onChange={handleChange} />
              <label className="form-check-label" htmlFor="status">Please check this box to set your ticket status to Open</label>
           
              <div className="mb-3">
              <div className="form-check">
    <input className="form-check-input" type="checkbox" id="adminId" onChange={handleChange} />
    <label className="form-check-label" htmlFor="adminId">Please assign to Tech Support</label>
  </div>
</div>
</div>
</div>

<button type="submit" class="btn btn-primary">Submit your ticket </button>

  </form>
  </div>
    );
      }

      export default Ticket;