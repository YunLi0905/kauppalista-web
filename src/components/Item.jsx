import React from "react"

const Item = ({ _id, name, quantity }) => {
  return (
    <div>
      <li>
        <p>{(_id, name, quantity)}</p>
      </li>
    </div>
  )
}

export default Item
