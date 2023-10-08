import { FC } from "react"
import bg from "../../../assets/classy_bg.png"
import classes from "./LoginLayout.module.css"

type LoginLayoutProps = {
  children: JSX.Element[] | JSX.Element
}

const LoginLayout: FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <img src={bg} alt="background" loading="lazy" />
      {children}
    </div>
  )
}

export default LoginLayout
