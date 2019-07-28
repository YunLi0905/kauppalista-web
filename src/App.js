import React, { Component } from "react"
import { Container } from "semantic-ui-react"

import Title from "./components/Title"
import ItemList from "./components/ItemList"
import AddNewForm from "./components/AddNewForm"
import { Divider } from "semantic-ui-react"
import { fetchAllItems, postNewItem, markAsDone } from "./actions/item.actions"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.addNewItem = this.addNewItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  componentDidMount = () => {
    fetchAllItems().then(items => this.setState({ items }))
  }
  addNewItem = item => {
    console.log("adding new item =", item)
    postNewItem(item).then(_item => {
      console.log("API called to add new item, this is the result =", _item)
      if (_item) {
        this.setState(prevState => {
          const { items } = prevState
          return {
            ...prevState,
            items: [...items, _item]
          }
        })
      }
    })
  }
  deleteItem = idToDelete => {
    console.log("deleting item with id =", idToDelete)
    const newItems = this.state.items.filter(item => {
      return item._id !== idToDelete
    })
    this.setState({ items: newItems })
  }

  markAsDone = item => {
    markAsDone(item).then(_item => {
      console.log("API called to check item off, this is the result =", _item)
      if (_item) {
        this.setState(prevState => {
          const { items } = prevState
          const newItems = items.filter(i => i._id !== _item._id)
          return {
            ...prevState,
            items: newItems
          }
        })
      }
    })
  }

  render = () => (
    <Container>
      <Title />

      <ItemList items={this.state.items} deleteItem={this.markAsDone} />
      <br />
      <Divider />
      <AddNewForm addNewItem={this.addNewItem} />
    </Container>
  )
}

export default App
