import { render, screen } from "../../../utility/testsUtils/utils"
import userEvent from "@testing-library/user-event"
import UserCard from "./UserCard"
describe("UserCard", () => {
  const user = {
    id: 1,
    name: "leanne graham",
    username: "bret",
    email: "sincere@april.biz"
  }
  test("should render all UserCard Elements", () => {
    render(<UserCard user={user} />, { path: "users" })
    expect(
      screen.getByRole("link", {
        name: /leanne graham @bret sincere@april\.biz/i
      })
    ).toBeInTheDocument()
    expect(screen.getByRole("img")).toBeInTheDocument()
    screen.getByRole("heading", {
      name: /leanne graham/i
    })
    expect(
      screen.getByRole("heading", {
        name: /@bret/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", {
        name: /sincere@april\.biz/i
      })
    ).toBeInTheDocument()
  })
})
