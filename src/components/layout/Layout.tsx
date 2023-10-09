import { FC } from "react"
import classes from "./Layout.module.css"

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
  isLoggedIn: boolean
}

const Layout: FC<LayoutProps> = ({ children, isLoggedIn }) => {
  return (
    <div
      className={`${isLoggedIn ? classes.dashboardLayout : classes.loginLayout}
        `}
    >
      {children}
    </div>
  )
}

export default Layout
