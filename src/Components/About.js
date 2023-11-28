import User from "./User"
import UserClass from "./UserClass"
import React from 'react'

class About extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <h1>About us</h1>
        <UserClass 
          name={"siddhesh (class)"}
          location={"navi mumbai (class)"}
        />
      </div>
    )
  }
  

}

export default About 