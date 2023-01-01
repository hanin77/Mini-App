import { render, screen } from "../utility/testsUtils/utils"
import Footer from "./Footer"
describe("Footer", () => {
  test("should render the Footer", () => {
    const year = new Date().getFullYear()
    render(<Footer />)
    const linkElement = screen.getByText(`All Rights Reserved © ${year}`)
    expect(linkElement).toBeInTheDocument()
  })
})
