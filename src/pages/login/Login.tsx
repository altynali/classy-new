import { useState } from "react"
import LoginLayout from "../../components/layout/LoginLayout/LoginLayout"
import classes from "./Login.module.css"
import SignIn from "../../components/login/signIn/SignIn"
import SignUp from "../../components/login/signUp/SignUp"
const Login = () => {
  const [signIn, setSignIn] = useState<boolean>(true)

  return (
    <LoginLayout>
      <div className={classes.login}>
        <div className={classes.login_container}>
          <h4>{signIn ? "Don’t have account?" : "Already have an account?"}</h4>
          <button
            className={classes.loginBtn}
            onClick={() => setSignIn(!signIn)}
          >
            {signIn ? "SIGN UP" : "SIGN IN"}
          </button>
        </div>
        <div className={classes.login_section}>
          {signIn ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </LoginLayout>
  )
}

export default Login
