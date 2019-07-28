import React from "react"
import Item from "./Item"
import { Card } from "semantic-ui-react"
import { Table } from "semantic-ui-react"

const ItemList = props => {
  const items = props.items || []
  return (
    <Card.Group>
      {items.map(item => (
        <Item key={item._id} item={item} deleteItem={props.deleteItem} />
      ))}
    </Card.Group>
  )
}

export default ItemList
