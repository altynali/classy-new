import { FC, PropsWithChildren, createContext, useState } from "react"

export const AuthContext = createContext({
  isLoggedIn: false || true,
  setIsLoggedIn: () => {},
  setIsLoggedOut: () => {},
})

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false)

  const setIsLoggedInHandler = () => {
    console.log("rpgsfmk")

    setIsLogged(true)
    console.log(isLogged)
  }

  const setIsLoggedOutHandler = () => {
    console.log("rpgsfmk")

    setIsLogged(false)
    console.log(isLogged)
  }

  console.log("17", isLogged)

  const authContext = {
    isLoggedIn: isLogged,
    setIsLoggedIn: setIsLoggedInHandler,
    setIsLoggedOut: setIsLoggedOutHandler,
  }

  return (
    <>
      <AuthContext.Provider value={authContext}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthContextProvider
