import axios from "axios"
//API endpoint base url
const REACT_APP_API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://jsonplaceholder.typicode.com"
export const getUsers = () => {
  return axios.get(`${REACT_APP_API_BASE_URL}/users`)
}

export const getUserTasks = (userId) => {
  return axios.get(`${REACT_APP_API_BASE_URL}/todos?userId=${userId}`)
}
