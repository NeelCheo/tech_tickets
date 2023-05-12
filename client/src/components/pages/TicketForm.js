import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_TICKET } from "../../utils/mutations";
import Login from "./Login";



const Ticket = (props) => {
    const [formState, setFormState] = useState({ title: '', userName: '', adminId: "", devices: "", issues: "", status: "" });
    const [ticket, { error, data }] = useMutation(ADD_TICKET);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { title, value } = event.target;
  
      setFormState({
        ...formState,
        [title]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await ticket({
          variables: { ...formState },
        });
  
        
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

                <form onSubmit={handleFormSubmit}>
                  <div class="row mb-3">
    <label for="title" class="col-sm-2 col-form-label">A brief description of your issue: </label>
    <div class="col-sm-10">
      <input type="title" class="form-control" id="title"></input>
    </div>
  </div>
  <div class="row mb-3">
    <label for="userName" class="col-sm-2 col-form-label">Which user is having the problem?</label>
    <div class="col-sm-10">
      <input type="userName" class="form-control" id="userName"></input>
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Which device does this impact?</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="devices" value="option1" checked></input>
        <label class="form-check-label" for="gridRadios1">
          Computer
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="devices" value="option2"></input>
        <label class="form-check-label" for="gridRadios2">
          Phone
        </label>
      </div>
      <div class="form-check ">
        <input class="form-check-input" type="radio" name="gridRadios" id="devices" value="option3" disabled></input>
        <label class="form-check-label" for="gridRadios3">
          Other
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gridRadios" id="adminId" value="option3" disabled></input>
        <label class="form-check-label" for="gridRadios3">
          Please assign to tech support
        </label>
      </div>
    
    </div>
  </fieldset>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Which type of issue are you having?</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="issues" value="option1" checked></input>
        <label class="form-check-label" for="gridRadios1">
          Internet Connection
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="issues" value="option2"></input>
        <label class="form-check-label" for="gridRadios2">
          Hardware Malfunction
        </label>
      </div>
      <div class="form-check ">
        <input class="form-check-input" type="radio" name="gridRadios" id="issues" value="option3" disabled></input>
        <label class="form-check-label" for="gridRadios3">
          Other
        </label>
      </div>
      
    </div>
    
  </fieldset>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="status"></input>
        <label class="form-check-label" for="gridCheck1">
          Please check this box to set your ticket status to Open
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="adminId"></input>
        <label class="form-check-label" for="gridCheck1">
          Please assign to Tech Support
        </label>
      </div>
    </div>
    
  </div>
  
  <button type="submit" class="btn btn-primary">Submit your ticket </button>

                </form>
              
  
         );
         }

export default Ticket;