import { useState } from "react"
// import classes from "./Login.module.css"
import SignIn from "../../components/login/signIn/SignIn"
import SignUp from "../../components/login/signUp/SignUp"
import LoginLayout from "../../components/layout/LoginLayout/LoginLayout"

const Login = () => {
  const [signIn, setSignIn] = useState<boolean>(true)

  return (
    <LoginLayout>
      <div>
        {signIn ? "Don’t have account?" : "Already have an account? SIGN IN"}
        <button onClick={() => setSignIn(!signIn)}>
          {signIn ? "SIGN UP" : "SIGN IN"}
        </button>
      </div>
      {signIn ? <SignIn /> : <SignUp />}
    </LoginLayout>
  )
}

export default Login
