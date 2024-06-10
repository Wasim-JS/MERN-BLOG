import React,{createContext, useContext,useEffect, useState} from 'react'



const AppContext = createContext()


const Context = ({children}) => {
  
  let [user,setUser] = useState({})

  async function getUser(){

    let user = await fetch('http://localhost:8000/api/v1/auth/me',{
      method: 'GET', // or 'POST', 'PUT', etc.
      credentials: 'include', // Ensures cookies are sent with the request
    })

    let res = await user.json()

    console.log(res)
    setUser(res.user)

}

useEffect(()=>{
getUser()
},[])

  return (
    <AppContext.Provider value={{user}}>

     {children}

    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)

export default Context