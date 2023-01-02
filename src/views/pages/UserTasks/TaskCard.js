import { CheckCircle, XCircle } from "react-feather"
import { Card, CardHeader } from "reactstrap"
import PropTypes from "prop-types"
const TaskCard = ({ title, completed }) => {
  return (
    <Card className="task-card flex-fill">
      <CardHeader>
        {completed ? (
          <CheckCircle data-testid="check-icon" size={23} />
        ) : (
          <XCircle data-testid="x-icon" size={23} />
        )}
        <span className="text-capitalize text-wrap text-secondary ml-3">
          {title}
        </span>
      </CardHeader>
    </Card>
  )
}

export default TaskCard

TaskCard.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool
}
