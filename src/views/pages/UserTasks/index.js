import React, { useEffect, useState } from "react"
import { XCircle, CheckCircle } from "react-feather"
import { useLocation, useParams } from "react-router-dom"
import { Container, Row, Col, Spinner, Badge } from "reactstrap"
import { getUserTasks } from "../../../services"
import TaskCard from "./TaskCard"

const UserTasks = () => {
  const { id } = useParams()
  //** get user info */
  const { state: user } = useLocation()
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUserTasks(id)
      .then((res) => {
        setTasks(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [id])
  return (
    <Container>
      <Row>
        <Col sm="12">
          {
            <h4 className="text-center text-secondary">
              <span className="text-italic text-info">{user?.name}</span> Tasks
            </h4>
          }
        </Col>
      </Row>
      <Col sm="12">
        {tasks.length === 0 && !loading && (
          <h6 className="text-secondary text-italic text-center">
            There are no Tasks found!
          </h6>
        )}
      </Col>
      {!loading && (
        <>
          <Col className="d-none d-sm-flex">
            <Col sm="6" className="text-center">
              <Badge className="mb-1" color="light">
                <CheckCircle color="#6fbe64" size={37} />
              </Badge>
            </Col>
            <Col sm="6" className="text-center">
              <Badge className="mb-1" color="light">
                <XCircle color="#E63462" size={37} />
              </Badge>
            </Col>
          </Col>
          <Col className="tasks-list d-flex flex-wrap mb-1">
            <Col sm="6">
              <Col sm="12" className="text-center d-sm-none">
                <Badge className="mb-1" color="light">
                  <CheckCircle color="#6fbe64" size={37} />
                </Badge>
              </Col>
              {tasks
                .filter((task) => task.completed)
                .map((task) => {
                  return (
                    <TaskCard
                      key={task.id}
                      title={task.title}
                      completed={task.completed}
                    />
                  )
                })}
            </Col>
            <Col sm="6">
              <Col sm="12" className="text-center d-sm-none">
                <Badge className="mb-1" color="light">
                  <XCircle color="#E63462" size={37} />
                </Badge>
              </Col>
              {tasks
                .filter((task) => !task.completed)
                .map((task) => {
                  return (
                    <TaskCard
                      key={task.id}
                      title={task.title}
                      completed={task.completed}
                    />
                  )
                })}
            </Col>
          </Col>
        </>
      )}
      {/* display Spinner when tasks still being fetched */}
      {loading && (
        <Row className="justify-content-center mt-1">
          <Spinner type="border" color="secondary" children="" />
        </Row>
      )}
    </Container>
  )
}

export default UserTasks
