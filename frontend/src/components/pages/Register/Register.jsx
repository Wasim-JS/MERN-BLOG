import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import './Register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({
    name:'',
    email:'',
    password:'',
    phone:'',
  })

   const handleRegisterData = ({target}) =>{
    setRegisterData(p=>({
      ...p,[target.name] :target.value
    }))
   }

   const handleRegisterSubmit = async (e) =>{
          e.preventDefault()

          console.log(registerData)
        try {
          const register = await fetch('http://localhost:8000/api/v1/auth/register',{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
              
            },
            body:JSON.stringify(registerData)
          })
             
          let data = await register.json()
          if(!data.success) throw new Error(data.message)
  
          alert(data.message)

          setRegisterData({
            name:'',
            email:'',
            password:'',
            phone:'',
          })

          navigate('/login')

        } catch (error) {
          alert('Error '+error.message)
          console.log('Error while Registering..')
          
        }

   }

  return (
    <Layout>
        <div className="login register">
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="login_data">
            <label htmlFor="">Name</label>
            <input value={registerData.name}  onChange={handleRegisterData}  type="text" name="name" id=""  placeholder="Enter the Name"/>
          </div>

          <div className="login_data">
            <label htmlFor="">Email</label>
            <input value={registerData.email} onChange={handleRegisterData}  type="email" name="email" id=""  placeholder="Enter the Email"/>
          </div>

          <div className="login_data">
            <label htmlFor="">Password</label>
            <input value={registerData.password}  onChange={handleRegisterData} type="password" name="password" id=""  placeholder="Enter the Passwoed"/>
          </div>

          <div className="login_data">
            <label htmlFor="">Phone</label>
            <input value={registerData.phone} onChange={handleRegisterData}  type="text" name="phone" id=""  placeholder="Enter the Passwoed"/>
          </div>

            <input type="submit" value={"Register"} />
        </form>
      </div>
    </Layout>
  )
}

export default Register