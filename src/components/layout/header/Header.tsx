import { FC, useContext } from "react"
import classes from "./Header.module.css"
import { getFullName } from "../../../utils/getFullName"
import { clearStorage } from "../../../utils/storage/storage"
import { useNavigate } from "react-router-dom"
import { AppRoutes } from "../../../pages/routes"
import { AuthContext } from "../../../utils/context/LoginProvider"

const Header: FC = () => {
  const fullName = getFullName()
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)

  const logOut = () => {
    clearStorage()
    authContext.setIsLoggedOut()
    navigate(AppRoutes.Main)
  }

  return (
    <div className={classes.container}>
      <span>Classy.io</span>
      <span>
        {fullName}
        <button onClick={logOut}>Logout</button>
      </span>
    </div>
  )
}

export default Header
