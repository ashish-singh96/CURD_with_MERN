import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateUser = () => {
  
  
  const [user, setUser]=useState({
    name:"",
    email:"",
    password:""
   });
  const navigate =useNavigate();


   const handleChange = (e) => {
    const {name,value}=e.target;
    setUser({...user, [name]:value});
    // console.log(user);
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8080/api/create", user)
    .then((response)=>{
      toast.success(response.data.msg, {position:"top-right"})
      navigate("/");
    }).catch(error=>{
      console.log(error);
    })
  }

  return (
    <div className="  d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className='w-50 bg-white rounded p-3'>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" name='name' className="form-control" id="name" onChange={handleChange}  required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" name='email' className="form-control" id="email" onChange={handleChange}  required />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Password:</label>
          <input type="password" name='password' className="form-control"  onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
      </div>
    </div>
    )
}

export default CreateUser


// get all data via getall api 
// store that data in an arr
// render that data in the table formate with map 