import { lazy } from "react"

// **  Routes
const routes = [
  {
    path: "/users",
    component: lazy(() => import("../../views/pages/Users"))
  }
]

export default routes
