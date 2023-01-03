import { render, screen } from "../../../utility/testsUtils/utils"
import server from "../../../mocks/server"
import { rest } from "msw"
import UserTasks from "./index"
const API_URL =
  process.env.REACT_APP_API_BASE_URL || "https://jsonplaceholder.typicode.com"
describe("User Tasks Page", () => {
  test("should display message -There are no Tasks found!- when no tasks found", async () => {
    //mock
    server.use(
      rest.get(`${API_URL}/todos?userId=1`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]))
      })
    )
    render(<UserTasks />)
    //expect spinner to be found
    expect(screen.getByRole("status")).toBeInTheDocument()
    //await for heading to be displayed
    await screen.findByRole("heading", {
      name: /There are no Tasks found!/i
    })
  })
  test("should display a list of all tasks", async () => {
    //mock
    server.use(
      rest.get(`${API_URL}/todos?userId=1`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            {
              userId: 1,
              id: 1,
              title: "title1",
              completed: false
            },
            {
              userId: 1,
              id: 2,
              title: "title2",
              completed: false
            },
            {
              userId: 1,
              id: 3,
              title: "title3",
              completed: false
            },
            {
              userId: 1,
              id: 4,
              title: "title4",
              completed: true
            }
          ])
        )
      })
    )
    render(<UserTasks />)
    expect(
      screen.getByRole("heading", {
        name: /tasks/i
      })
    ).toBeInTheDocument()
    //expect spinner to be found
    expect(screen.getByRole("status")).toBeInTheDocument()
    //await for heading to be displayed
    await screen.findByText(/title1/i)
    await screen.findByText(/title2/i)
    await screen.findByText(/title3/i)
    await screen.findByText(/title4/i)
  })
})
