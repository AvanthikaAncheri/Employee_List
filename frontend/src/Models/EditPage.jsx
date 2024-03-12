import React, { useEffect, useState } from 'react'
import '../Styles/Styles.css'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditPage = () => {
    const {_id } = useParams()
    const [Product, setProduct] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        if (_id) {
            axios.get(`http://localhost:5000/getsingle/${_id}`)
                 .then((res) => {
                     setProduct(res.data);
                 })
                 .catch((error) => {
                     console.error('Error fetching data:', error);
                     // Handle error (e.g., show an error message to the user)
                 });
        }
    }, [_id]);

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
        const display = await axios.put(`http://localhost:5000/update/${_id}`, {userEmail, userName, phone, designation, gender, course, image})
        navigate(-1)
        console.log(display.data);
    }

    const [userEmail, setuserEmail] = useState('')
    const [userName, setuserName] = useState('')
    const [phone, setphone] = useState('')
    const [designation, setdesignation] = useState('')
    const [gender, setgender] = useState('')
    const [course, setcourse] = useState('')
    const [image, setimage] = useState('')

    useEffect(() => {
        setuserEmail(Product.userEmail || '');
        setuserName(Product.userName || '');
        setphone(Product.phone || '');
        setdesignation(Product.designation || '');
        setgender(Product.gender || '');
        setcourse(Product.course || '');
        setimage(Product.image || '');
    }, [Product]);

    return (
        <div>
            <Form style={{width:"600px",marginLeft:"300px",marginTop:"10px",background:"hsl(176,17.65%,66.67%)",color:"white",padding:"30px"}} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Email :</Form.Label>
             <Form.Control type="email" placeholder="avanthikancheri@gmail.com"  onChange={handleEmail} value={userEmail} name="email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Name :</Form.Label>
             <Form.Control type="text" placeholder="Avanthika" onChange={handleName} value={userName} name="name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>phone :</Form.Label>
             <Form.Control type="number" placeholder="987654321" onChange={handlePhone} value={phone} name="number"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Designation :</Form.Label>
             <Form.Control type="text" placeholder="Designer" onChange={handleDesignation} value={designation} name="designation"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Gender :</Form.Label>
             <Form.Control type="text" placeholder="Female" onChange={handleGender} value={gender} name="gender"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Course :</Form.Label>
             <Form.Control type="text" placeholder="UI/UX"  onChange={handleCourse} value={course} name="course"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Image :</Form.Label>
             <Form.Control type="text" placeholder="photo.jpg"  onChange={handleImage} value={image} name="image"/>
          </Form.Group>
          <Button type="submit" className='Button'>Add</Button>
      </Form>
        </div>
    )
}

export default EditPage
