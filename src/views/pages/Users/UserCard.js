//** default user Avatar
import defaultAvatar from "../../../assets/images/user-avatar.jpg"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
const UserCard = ({ user }) => {
  return (
    <Link
      className="text-decoration-none"
      to={{ pathname: `/users/${user.id}/tasks`, state: { ...user } }}
    >
      <div className="user-card">
        <img src={defaultAvatar} alt="" />
        <div className="d-flex flex-column justify-content-space-between">
          <h6 className="text-secondary mb-0">{user.name}</h6>
          <h6 className="font-italic text-muted">@{user.username}</h6>
          <h6 className="text-info">{user.email}</h6>
        </div>
      </div>
    </Link>
  )
}

export default UserCard

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string
  })
}
