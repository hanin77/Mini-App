import { render, screen } from "../utility/testsUtils/utils"
import Header from "./Header"
describe("Header", () => {
  test("should render the Header correctly", () => {
    render(<Header />, { route: "/random-route" })
    const linkElement = screen.getByRole("link", {
      name: /users tasks management/i
    })
    expect(linkElement).toBeInTheDocument()
  })
})
