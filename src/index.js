import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import FullBackSpinner from "./views/components/FullBackSpinner"

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<FullBackSpinner />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
