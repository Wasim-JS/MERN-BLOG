import React from 'react'

import {Outlet,Navigate} from 'react-router-dom'
import { useAppContext } from '../../utiles/Context'

const AuthProtect = () => {
    const {user} = useAppContext()
  return (
    Object.keys(user).length>0?<Outlet />:<Navigate to={'/'} />
  )
}


export default AuthProtect