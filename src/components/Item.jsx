import React from "react"
import { Card } from "semantic-ui-react"

const Item = props => {
  const { _id, name, quantity } = props.item
  return <Card fluid header={name} description={quantity} />
}

export default Item
