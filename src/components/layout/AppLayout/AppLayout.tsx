import { FC } from "react"
import classes from "./AppLayout.module.css"
import Header from "../header/Header"

type AppLayoutProps = {
  children: JSX.Element[] | JSX.Element
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />
      {children}
    </div>
  )
}

export default AppLayout
