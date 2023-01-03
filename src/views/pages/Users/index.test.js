import { render, screen } from "../../../utility/testsUtils/utils"
import server from "../../../mocks/server"
import { rest } from "msw"
import Users from "./index"
const API_URL =
  process.env.REACT_APP_API_BASE_URL || "https://jsonplaceholder.typicode.com"
describe("Users Page", () => {
  test("should display message -There are no Users too display- when no users found", async () => {
    //mock
    server.use(
      rest.get(`${API_URL}/users`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]))
      })
    )
    render(<Users />, { path: "users" })
    expect(
      screen.getByRole("heading", {
        name: /users list/i
      })
    ).toBeInTheDocument()
    //expect spinner to be found
    expect(screen.getByRole("status")).toBeInTheDocument()
    //await for heading to be displayed
    await screen.findByRole("heading", {
      name: /There are no Users to display/i
    })
  })
  test("should display a list of all users", async () => {
    //mock
    server.use(
      rest.get(`${API_URL}/users`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            {
              id: 1,
              name: "user1",
              username: "username1",
              email: "user1@email.com"
            },
            {
              id: 2,
              name: "user2",
              username: "username2",
              email: "user2@email.com"
            }
          ])
        )
      })
    )
    render(<Users />, { path: "users" })
    expect(
      screen.getByRole("heading", {
        name: /users list/i
      })
    ).toBeInTheDocument()
    //expect spinner to be found
    expect(screen.getByRole("status")).toBeInTheDocument()
    //await for heading to be displayed
    await screen.findByRole("link", {
      name: /user1 @username1 user1@email\.com/i
    })
    await screen.findByRole("link", {
      name: /user2 @username2 user2@email\.com/i
    })
  })
})
