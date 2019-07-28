import axios from "axios"

export const fetchAllItems = () => {
  return axios
    .get("/items")
    .then(result => {
      console.log(result)
      return result.data.filter(item => !item.done)
    })
    .catch(error => {
      console.log(error)
      return []
    })
}
export const postNewItem = item => {
  return axios
    .post("/items", item)
    .then(result => {
      console.log(result)
      return result.data
    })
    .catch(error => {
      console.log(error)
      return null
    })
}

export const markAsDone = item => {
  const itemToPatch = { ...item, done: true }
  return axios
    .patch(`/items/${item._id}`, itemToPatch)
    .then(result => {
      console.log(result)
      return result.data
    })
    .catch(error => {
      console.log(error)
      return null
    })
}
