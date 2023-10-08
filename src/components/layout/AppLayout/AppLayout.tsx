import { FC } from "react"
import classes from "./AppLayout.module.css"

type AppLayoutProps = {
  children: JSX.Element[] | JSX.Element
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>
}

export default AppLayout
