import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const User = () => {
  const [users, setUsers] = useState([]);
  const getAllData = async () => {
    await axios.get('http://localhost:8080/api/getall')
      .then(res => {
        setUsers(res.data);
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/deleteuser/${id}`)
      .then(res=> {console.log(res)
        window.location.reload(res)})
      .catch(err=>console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      {/* <button className='btn btn-success'>Edit</button> */}
                      <Link to={`/update/${user._id}`} className='btn btn-success btn-sm' style={{ marginRight: "10px" }}>Update</Link>
                      {/* <button className='btn btn-danger'>Delete</button> */}
                      <Link  className='btn btn-danger btn-sm' onClick={(e) => handleDelete(user._id)}>Delete</Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default User