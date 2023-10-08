import { Suspense } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { LoginLazy } from "./pages/login/Login.lazy"
import { DashboardLazy } from "./pages/dashboard/Dashboard.lazy"
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary"
import { AppRoutes } from "./pages/routes"
import NotFound from "./pages/notFound/NotFound"
import { getStorageValue } from "./utils/storage/storage"
import NewClass from "./pages/newClass/NewClass"
import ClassId from "./pages/classId/ClassId"

function App() {
  console.log(getStorageValue("auth_id"))

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        {/* TODO: to layout */}
        <div
          className={
            getStorageValue("auth_id") ? "dashboardLayout" : "loginLayout"
          }
        >
          <Routes>
            {/* TODO: back */}
            {/* <Route
              path={AppRoutes.Main}
              element={
                getStorageValue("auth_id") ? <DashboardLazy /> : <LoginLazy />
              }
            /> */}
            <Route path={AppRoutes.Dashboard} element={<DashboardLazy />} />
            <Route path={AppRoutes.NewClass} element={<NewClass />} />
            <Route path={AppRoutes.ClassId} element={<ClassId />} />
            <Route path={AppRoutes.Login} element={<LoginLazy />} />
            <Route path={AppRoutes.ErrorPageNotFound} Component={NotFound} />
          </Routes>
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
