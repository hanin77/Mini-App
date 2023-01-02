import { Link } from "react-router-dom"
import { Container, Col } from "reactstrap"
const Error = () => {
  return (
    <Container>
      <Col className="text-center">
        <p className="display-1">404</p>
      </Col>
      <Col className="text-center">
        {" "}
        <p className="display-4">Page not Found</p>
      </Col>
      <Col className="text-center">
        {" "}
        <p className="text-info">
          {" "}
          Go
          <span>
            <Link
              className="font-weight-bold text-info text-decoration-none"
              to="/users"
            >
              {" "}
              Home
            </Link>
          </span>
        </p>
      </Col>
    </Container>
  )
}

export default Error
