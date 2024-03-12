import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

const Home = () => {
  return (
    <div>
       <div>
       <div className='Event-text'>
          <h1 className='text1'>WELCOME TO HOME PAGE!</h1>
          <h6 className='text2'>Ready to join our employee-list</h6>
          <Link to={`/login`}><button className="Button" >Login</button></Link>
       </div>
    </div>
    </div>
  )
}

export default Home