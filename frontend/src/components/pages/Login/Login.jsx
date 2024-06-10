import { useState } from "react";
import Layout from "../Layout/Layout";
import './Login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()
   
  const [loginData, setLoginData] = useState({
    email:'',
    password:'',

  })

   const handleLoginData = ({target}) =>{
    setLoginData(p=>({
      ...p,[target.name] :target.value
    }))
   }

   const handleLoginSubmit = async (e) =>{
    e.preventDefault()
    console.log(loginData)
    try {
      const login = await fetch('http://localhost:8000/api/v1/auth/login',{
        method: 'POST',
        credentials: 'include',
        headers:{
          "Content-Type": "application/json",
        },
      
        body:JSON.stringify(loginData)
      })
         
      let data = await login.json()
      if(!data.success) throw new Error(data.message)
        console.log(data)

      alert(data.message)
      navigate('/')

    } catch (error) {
      alert('Error '+error.message)
      console.log('Error while Login..')
      
    }
}
  return (
    <Layout>
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="login_data">
            <label htmlFor="">Email</label>
            <input value={loginData.email} onChange={handleLoginData} type="email" name="email" id=""  placeholder="Enter the Email"/>
          </div>

          <div className="login_data">
            <label htmlFor="">Password</label>
            <input value={loginData.password} onChange={handleLoginData} type="password" name="password" id=""  placeholder="Enter the Password"/>
          </div>

          <input type="submit" value={"Login"}/>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
