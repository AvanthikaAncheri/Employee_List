import axios from 'axios';
import React, { useState } from 'react';
import { Button, FormGroup, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
   
    const navigate=useNavigate()
    
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async(event) => {
      event.preventDefault();
      const display = await axios.post('http://localhost:5000/login',{Email,Password})
      console.log(display.data);
      navigate('/view')
  }

    return (
        <div>
            <Form style={{width:"600px",marginLeft:"300px",marginTop:"10px",background:"hsl(176,17.65%,66.67%)",color:"white",padding:"30px"}} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Email :</Form.Label>
             <Form.Control type="email" placeholder="email" value={Email} onChange={handleEmail}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Password :</Form.Label>
             <Form.Control type="password" placeholder="xxxx" value={Password} onChange={handlePassword}/>
          </Form.Group>
          <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
        </Form>
            <p>Don't have an account ?<Link to='/create'>Create</Link></p>
        </div>
    );
}

export default Login;
