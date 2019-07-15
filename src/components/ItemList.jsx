import React from "react"
import Item from "./Item"

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
  return items.map(item => <Item key={item._id} item={item} />)
}

export default ItemList
