import { render as rtlRender } from "@testing-library/react"
import { MemoryRouter } from "react-router"
//** all our renderd components in test files will be wrapped in react router  */
function render(ui, { ...renderOptions } = {}) {
  const route =
    renderOptions && renderOptions.route ? renderOptions.route : ["/"]
  function Wrapper({ children }) {
    return <MemoryRouter initialEntries={[...route]}>{children}</MemoryRouter>
  }
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions
    })
  }
}

// re-export everything
export * from "@testing-library/react"
// override render method
export { render }
