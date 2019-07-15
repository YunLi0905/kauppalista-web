import React from "react"
import Item from "./Item"
import { Card } from "semantic-ui-react"

const ItemList = props => {
  const items = props.items || [
    {
      _id: "1",
      name: "eka juttu",
      quantity: 13
    },
    {
      _id: "2",
      name: "toka juttu",
      quantity: 42
    }
  ]
  return (
    <Card.Group>
      {items.map(item => (
        <Item key={item._id} item={item} />
      ))}
    </Card.Group>
  )
}

export default ItemList
