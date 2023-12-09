import User from "./User"
import UserClass from "./UserClass"
import React from 'react'
import UserContext from "../utils/UserContext"

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
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass 
          name={"siddhesh (class)"}
          location={"navi mumbai (class)"}
        />
      </div>
    )
  }
  

}

export default About 