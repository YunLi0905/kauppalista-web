import React from "react"
import { Header, Icon } from "semantic-ui-react"

const Title = () => (
  <div>
    <b> </b>
    <Header as="h2" icon textAlign="center">
      <Icon name="cart" circular />
      <Header.Content>Kauppalista</Header.Content>
    </Header>
  </div>
)

export default Title
