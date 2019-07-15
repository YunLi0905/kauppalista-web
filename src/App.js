import React from "react"
import { Container } from "semantic-ui-react"

import Title from "./components/Title"
import ItemList from "./components/ItemList"
import AddNewForm from "./components/AddNewForm"
import { Divider } from "semantic-ui-react"

const App = () => {
  return (
    <Container>
      <Title />
      <Divider />
      <ItemList />
      <AddNewForm />
    </Container>
  )
}

export default App
