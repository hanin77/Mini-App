/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Row, Col, Container, Spinner } from "reactstrap"
import { getUsers } from "../../../services"
import UserCard from "./UserCard"

const Users = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getUsers()
      .then((res) => {
        setData(res?.data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])
  return (
    <Container>
      <Row>
        <Col lg="5" md="12">
          {data.length === 0 && !loading ? (
            <h4 className="text-info">There are no Users to display</h4>
          ) : (
            <h4 className="text-center text-secondary">Users List</h4>
          )}
        </Col>
        <Col className="users-list" lg="7" md="12">
          {loading && (
            <Row className="justify-content-center mt-1">
              <Spinner type="border" color="secondary" children={false} />
            </Row>
          )}
          {!!data.length &&
            data.map((user) => <UserCard key={user.email} user={user} />)}
        </Col>
      </Row>
    </Container>
  )
}

export default Users
