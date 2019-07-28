import React from "react"
import { Button } from "semantic-ui-react"
import { Form } from "semantic-ui-react"

class AddNewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "", quantity: "" }
    this.counter = 0

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const item = this.state
    this.props.addNewItem(item)
    this.setState({ name: "", quantity: "" })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Quantity"
            placeholder="Quantity"
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />

          <b> </b>
        </Form.Group>
        <Button content="Add New Item" onSubmit={this.handleSubmit} />
      </Form>
    )
  }
}

export default AddNewForm
