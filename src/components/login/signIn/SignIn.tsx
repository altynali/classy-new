import { useState } from "react"
import signInUtil from "../../../utils/signIn"
import classes from "./SignIn.module.css"

const SignIn = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const signInHandler = async () => {
    signInUtil(email, password)
  }

  return (
    <div className={classes.form}>
      Sign in to Classy. Enter your details below.
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
      <button onClick={signInHandler}>Sign In</button>
    </div>
  )
}

export default SignIn
