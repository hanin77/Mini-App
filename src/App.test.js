import { render } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  test("renders  without crashing", () => {
    const { unmount } = render(<App />)
    unmount()
  })
})
