import { FC } from "react"
import bg from "../../../assets/classy_bg.png"
import classes from "./LoginLayout.module.css"

type LoginLayoutProps = {
  children: JSX.Element[] | JSX.Element
}

const LoginLayout: FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.containerImg}>
        <img src={bg} alt="background" loading="lazy" />
      </div>
      <div className={classes.containerChild}>{children}</div>
    </div>
  )
}

export default LoginLayout
