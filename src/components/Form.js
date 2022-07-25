
import React from 'react';

const Form = (props) => {
 const handleChange = (event) => {
    const {name, value} = event.target;
    props.change(name, value);
 }
 const handleSubmit = (event) => {
    event.preventDefault();
    props.submit();
 }
    return (
        <form  onSubmit={handleSubmit}>
          <label> Name
            <input 
              placeholder='Enter Your Name'
              value= {props.values.name}
              name = 'name'
              onChange = {handleChange}
              />
          </label>
          
          <label> Email
            <input 
              placeholder='Enter Your Email'
              value= {props.values.email}
              name = 'email'
              onChange = {handleChange}
              />
          </label>

          <label> Role
            <input 
              placeholder='Enter Your Role'
              value= {props.values.role}
              name = 'role'
              onChange = {handleChange}
              />
          </label>
          <input type='submit' value='Create Your Team'/>
        </form>
    )
}
 export default Form;