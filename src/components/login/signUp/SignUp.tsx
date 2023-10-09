import { useContext, useState } from "react"
import classes from "./SignUp.module.css"
import { useNavigate } from "react-router-dom"
import { AppRoutes } from "../../../pages/routes"
import { AuthContext } from "../../../utils/context/LoginProvider"
import signUpUtil from "../../../utils/login/signUp"

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  const signUpHandler = async () => {
    signUpUtil(firstName, lastName, email, password, repeatPassword)
    authContext.setIsLoggedIn()

    // authContext.signUp(firstName, lastName, email, password, repeatPassword)
    navigate(AppRoutes.Dashboard)
  }

  return (
    <div className={classes.form}>
      <div className={classes.heading}>
        <h2 className={classes.title}>Get started absolutely free.</h2>
        <p>Enter your details below.</p>
      </div>
      <input
        className={classes.input}
        type="text"
        placeholder="First name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className={classes.input}
        type="text"
        placeholder="Last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className={classes.input}
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={classes.input}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className={classes.input}
        type="password"
        placeholder="Repeat password"
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <div className={classes.contBtn}>
        <button className={classes.btn} onClick={signUpHandler}>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default SignUp
