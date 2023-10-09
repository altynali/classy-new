import { useContext, useState } from "react"
import classes from "./SignIn.module.css"
import { useNavigate } from "react-router-dom"
import { AppRoutes } from "../../../pages/routes"
import { AuthContext } from "../../../utils/context/LoginProvider"
import signInUtil from "../../../utils/login/signIn"

const SignIn = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  // const [displayPassword, setDisplayPassword] = useState<boolean>(false)
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)

  const signInHandler = async () => {
    signInUtil(email, password)
    authContext.setIsLoggedIn()
    // authContext.isLoggedIn = true
    // authContext.signIn(email, password)
    navigate(AppRoutes.Dashboard)
  }

  // const displayHandler = () => {
  //   setDisplayPassword((prevState) => !prevState)
  // }

  return (
    <div className={classes.form}>
      <div className={classes.heading}>
        <h2 className={classes.title}>Sign in to Classy.</h2>
        <p>Enter your details below.</p>
      </div>
      <input
        className={classes.input}
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={classes.input}
        // type={!displayPassword ? "password" : "text"}
        type="password"
        placeholder="Password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <div className={classes.input_container}>
        <button onClick={displayHandler} className={classes.handleBtn} />
      </div> */}
      <div className={classes.contBtn}>
        <button className={classes.btn} onClick={signInHandler}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default SignIn
