import React from "react"
import { Input } from "semantic-ui-react"
import { Button } from "semantic-ui-react"

class AddNewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "", quantity: "" }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log("toimii!")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <Input
            placeholder="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <b> </b>
        <label>
          <Input
            placeholder="Quantity"
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
        </label>
        <b> </b>
        <Button onSubmit={this.state.handleSubmit}>Add New Item</Button>
      </form>
    )
  }
}

export default AddNewForm
