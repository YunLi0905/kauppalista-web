import React from "react"

import Title from "./components/Title"
import ItemList from "./components/ItemList"
import AddNewForm from "./components/AddNewForm"
import { Divider } from "semantic-ui-react"

const App = () => {
  return (
    <>
      <Title />
      <Divider />
      <ItemList />
      <AddNewForm />
    </>
  )
}

export default App
