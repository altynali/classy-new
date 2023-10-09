import { Suspense, useContext, useEffect, useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { LoginLazy } from "./pages/login/Login.lazy"
import { DashboardLazy } from "./pages/dashboard/Dashboard.lazy"
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary"
import { AppRoutes } from "./pages/routes"
import NotFound from "./pages/notFound/NotFound"
import NewClass from "./pages/newClass/NewClass"
import ClassId from "./pages/classId/ClassId"
import Layout from "./components/layout/Layout"
import Loading from "./components/loading/Loading"
import { AuthContext } from "./utils/context/LoginProvider"

function App() {
  const authContext = useContext(AuthContext)
  console.log(authContext)

  const [loginState, setLoginState] = useState<boolean>(false)

  useEffect(() => {
    setLoginState((prev) => !prev)
  }, [authContext.isLoggedIn])

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Layout isLoggedIn={loginState}>
          <Routes>
            <Route path={AppRoutes.Main} element={<LoginLazy />} />

            <Route path={AppRoutes.Dashboard} element={<DashboardLazy />} />
            <Route path={AppRoutes.NewClass} element={<NewClass />} />
            <Route path={AppRoutes.ClassId} element={<ClassId />} />
            <Route path={AppRoutes.ErrorPageNotFound} Component={NotFound} />
          </Routes>
        </Layout>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
