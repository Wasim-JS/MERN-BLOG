import { Navigate, Outlet } from "react-router-dom"
import { useAppContext } from "../../utiles/Context"

const LoggedInProtect = () => {
    const {user} = useAppContext()
  return (
    Object.keys(user).length>0?<Navigate to={'/profile'}/>: <Outlet />
  )
}

export default LoggedInProtect