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
  
      
    
    };
  
    return (
       isSubmitted ? <h1>Thanks for submitting your ticket. Please check its status in the Open Tickets tab!</h1> : <form onSubmit={handleFormSubmit}>
        <div class="row mb-3">
<label for="title" class="col-sm-2 col-form-label">A brief description of your issue: </label>
<div class="col-sm-10">
<input type="title" class="form-control" id="title" onChange={handleChange}></input>
</div>
</div>
<div class="row mb-3">
<label for="userName" class="col-sm-2 col-form-label">Which user is having the problem?</label>
<div class="col-sm-10">
<input type="userName" class="form-control" id="userName" onChange={handleChange}></input>
</div>
</div>
<fieldset class="row mb-3">
<legend class="col-form-label col-sm-2 pt-0">Which device does this impact?</legend>
<div class="col-sm-10">
<div class="form-check">
<input class="form-check-input" type="radio" name="gridRadios" id="devices" onChange={handleChange} value="Computer" ></input>
<label class="form-check-label" for="gridRadios1">
Computer
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="gridRadios" id="devices" onChange={handleChange} value="Phone"></input>
<label class="form-check-label" for="gridRadios2">
Phone
</label>
</div>
<div class="form-check ">
<input class="form-check-input" type="radio" name="gridRadios" id="devices" onChange={handleChange} value="Other" ></input>
<label class="form-check-label" for="gridRadios3">
Other
</label>
</div>


</div>
</fieldset>
<fieldset class="row mb-3">
<legend class="col-form-label col-sm-2 pt-0">Which type of issue are you having?</legend>
<div class="col-sm-10">
<div class="form-check">
<input class="form-check-input" type="radio" name="gridRadios2" id="issues" onChange={handleChange} value="Internet" ></input>
<label class="form-check-label" for="gridRadios1">
Internet Connection
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="gridRadios2" id="issues" onChange={handleChange} value="Hardware"></input>
<label class="form-check-label" for="gridRadios2">
Hardware Malfunction
</label>
</div>
<div class="form-check ">
<input class="form-check-input" type="radio" name="gridRadios2" id="issues" onChange={handleChange} value="option3" ></input>
<label class="form-check-label" for="gridRadios3">
Other
</label>
</div>

</div>

</fieldset>
<div class="row mb-3">
<div class="col-sm-10 offset-sm-2">
<div class="form-check">
<input class="form-check-input" type="checkbox" id="status" onChange={handleChange}></input>
<label class="form-check-label" for="gridCheck1">
Please check this box to set your ticket status to Open
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" id="adminId" onChange={handleChange}></input>
<label class="form-check-label" for="gridCheck1">
Please assign to Tech Support
</label>
</div>
</div>

</div>

<button type="submit" class="btn btn-primary" onChange={handleChange}>Submit your ticket </button>

      </form>
    
  

                
  
         );
   }

export default Ticket;