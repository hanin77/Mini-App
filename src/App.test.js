import { render } from "./utility/testsUtils/utils"
import App from "./App"

describe("App", () => {
  test("renders  without crashing", () => {
    const { unmount } = render(<App />)
    unmount()
  })
})
