import { render, screen } from "../../../utility/testsUtils/utils"

import TaskCard from "./TaskCard"
describe("TaskCard", () => {
  test("should render TaskCard Element with check icon when task complete", () => {
    const title = "title A"
    const completed = true
    render(<TaskCard title={title} completed={completed} />)
    expect(screen.getByText("title A")).toBeInTheDocument()
    expect(screen.getByTestId("check-icon")).toBeInTheDocument()
  })
  test("should render TaskCard Element with X icon when task is incomplete", () => {
    const title = "title A"
    const completed = false
    render(<TaskCard title={title} completed={completed} />)
    expect(screen.getByText("title A")).toBeInTheDocument()
    expect(screen.getByTestId("x-icon")).toBeInTheDocument()
  })
})
