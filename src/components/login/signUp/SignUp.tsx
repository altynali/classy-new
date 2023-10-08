import { useState } from "react"
import signUpUtil from "../../../utils/signUp"
import classes from "./SignUp.module.css"

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")
  const signUpHandler = async () => {
    signUpUtil(firstName, lastName, email, password, repeatPassword)
  }

  return (
    <div className={classes.form}>
      Sign in to Classy. Enter your details below.
      <input
        type="text"
        placeholder="First name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Repeat password"
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <button onClick={signUpHandler}>Sign Up</button>
    </div>
  )
}

export default SignUp
