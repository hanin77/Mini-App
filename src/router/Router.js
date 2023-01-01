import {
  BrowserRouter as AppRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import routes from "./routes"
import Error from "../views/pages/Error"
export default function Router() {
  return (
    <AppRouter>
      {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
      <Switch>
        {routes.map((route) => {
          return (
            <Route exact key={route.path} path={route.path}>
              <route.component />
            </Route>
          )
        })}
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/users" />
          }}
        />
        {/* NotFound Error page */}
        <Route path="*" component={Error} />/
      </Switch>
    </AppRouter>
  )
}
