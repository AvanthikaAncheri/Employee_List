import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styles/Styles.css'

const EmployeePage = () => {

    const [view, setview] = useState([])
  useEffect(() => {
   axios.get("http://localhost:5000/getAll").then((display)=>{
    setview(display.data)
   })
  }, [])

  return (
    <div className='main'>
      <h1 className='Heading'>Employee List</h1>
    <div className='card'>
    <table class="table">
        <thead>
          <tr>
             <th scope="col">#</th>
             <th scope="col">userEmail</th>
             <th scope="col">userName</th>
             <th scope="col">phone</th>
             <th scope="col">designation</th>
             <th scope="col">gender</th>
             <th scope="col">course</th>
             <th scope="col">image</th>
             <th scope="col"></th>
          </tr>
        </thead>
       <tbody>
       {view.map((display)=>
        <tr>
        <td>{display.id}</td>
        <td>{display.userEmail}</td>
        <td>{display.userName}</td>
        <td>{display.phone}</td>
        <td>{display.designation}</td>
        <td>{display.gender}</td>
        <td>{display.course}</td>
        <td>{display.image}</td>
        <td><Link to="/edit"><Button className="Button">Edit Details</Button></Link></td>
      </tr>
        )}
       </tbody>
    </table>
       </div>
       <Link to="/create"><Button className="Button">Add Employee</Button></Link>
    </div>
  )
}

export default EmployeePage