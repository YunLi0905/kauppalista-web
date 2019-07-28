import React, { Component } from "react"
import { Card } from "semantic-ui-react"
import { Button, Popup } from "semantic-ui-react"

// const Item = props => {
//   const { _id, name, quantity } = props.item
//   return <Card fluid header={[name, quantity]} />
// }

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", quantity: "" }
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete = e => {
    e.preventDefault()
    const { deleteItem, item } = this.props
    deleteItem(item)
  }

  render() {
    const { name, quantity } = this.props.item
    const text = `${name}(${quantity})`
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header content={text} />
        </Card.Content>

        <Button
          color="instagram"
          onClick={this.handleDelete}
          content="Remove"
          icon="delete"
          labelPosition="left"
        />
      </Card>
    )
  }
}

export default Item
