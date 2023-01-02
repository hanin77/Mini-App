import { lazy } from "react"

// **  Routes
const routes = [
  {
    path: "/users/:id/tasks",
    component: lazy(() => import("../../views/pages/UserTasks"))
  },
  {
    path: "/users",
    component: lazy(() => import("../../views/pages/Users"))
  }
]

export default routes
