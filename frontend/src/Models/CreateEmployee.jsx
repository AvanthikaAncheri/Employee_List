import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../Styles/Styles.css'

const CreateEmployee = () => {

    const navigate=useNavigate()
    
    const [userEmail, setuserEmail] = useState("")
    const [userName, setuserName] = useState("")
    const [phone, setphone] = useState("")
    const [designation, setdesignation] = useState("")
    const [gender, setgender] = useState("")
    const [course, setcourse] = useState("")
    const [image, setimage] = useState("")

    const handleEmail = (event) => {
        setuserEmail(event.target.value);
    };
    const handleName = (event) => {
        setuserName(event.target.value);
    };
    const handlePhone= (event) => {
        setphone(event.target.value);
    };
    const handleDesignation = (event) => {
        setdesignation(event.target.value);
    };
    const handleGender = (event) => {
        setgender(event.target.value);
    };
    const handleCourse = (event) => {
        setcourse(event.target.value);
    };
    const handleImage = (event) => {
        setimage(event.target.value);
    };


    const handleSubmit = async(event) => {
      event.preventDefault();
      const display = await axios.post('http://localhost:5000/user',{userEmail,userName,phone,designation,gender,course,image})
      console.log(display.data);
      navigate(-1)
  }

  return (
    <div>
        <Form style={{width:"600px",marginLeft:"300px",marginTop:"10px",background:"hsl(176,17.65%,66.67%)",color:"white",padding:"30px"}} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Email :</Form.Label>
             <Form.Control type="email"   onChange={handleEmail} value={userEmail} name="email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Name :</Form.Label>
             <Form.Control type="text" onChange={handleName} value={userName} name="name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>phone :</Form.Label>
             <Form.Control type="number" onChange={handlePhone} value={phone} name="number"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Designation :</Form.Label>
             <Form.Control type="text"  onChange={handleDesignation} value={designation} name="designation"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Gender :</Form.Label>
             <Form.Control type="text" onChange={handleGender} value={gender} name="gender"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Course :</Form.Label>
             <Form.Control type="text" placeholder=""  onChange={handleCourse} value={course} name="course"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Image :</Form.Label>
             <Form.Control type="text" placeholder=""  onChange={handleImage} value={image} name="image"/>
          </Form.Group>
          <Button type="submit" className='Button'>Add</Button>
      </Form>
    </div>
  )
}

export default CreateEmployee