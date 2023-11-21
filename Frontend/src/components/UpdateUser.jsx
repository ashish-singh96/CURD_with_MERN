import React, { useEffect , useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const getUserById = async ()=>{
    await axios.get(`http://localhost:8080/api/getone/${id}`)
    .then(res=>{
      setUser(res.data);
    }).catch(eerr=>{
      console.log(eerr);
    })
  }
  useEffect(()=>{
    getUserById();
  },[])

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const update = async(e) =>{
    e.preventDefault()
    await axios.put(`http://localhost:8080/api/updateuser/${id}`, user)
    .then((result)=>{
     console.log(result)
      navigate("/");
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="  d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='w-50 bg-white rounded p-3'>
        <h2>Update User</h2>
        <form onSubmit={update}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" name='name' className="form-control" id="name" onChange={e=>handleUpdate(e)} value={user.name} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" name='email' className="form-control" id="email" onChange={e=>handleUpdate(e)} value={user.email } />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">Password:</label>
            <input type="password" name='password' className="form-control" id="age" onChange={e=>handleUpdate(e)} value={user.password} />
          </div>

          <button type="submit" className="btn btn-primary btn-sm">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser

// click on edit button
// open form with already filled previous values
// then update the data and click on submit
// go to the home page