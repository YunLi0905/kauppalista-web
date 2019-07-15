// import React from "react"

// const Title = () => {
//   return (
//     <div>
//       <h1>Kauppalista</h1>
//     </div>
//   )
// }

// export default Title

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
