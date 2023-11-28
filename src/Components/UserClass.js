import React from 'react'

class UserClass extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      
      name: "default",
      location: "default",
      avatar_url: ""
    }
  }

  
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/siddhesh494");
    const json = await data.json()
    
    this.setState({
      name: json.name,
      location: json.location || "India",
      avatar_url: json.avatar_url
    })
    console.log(json)

  }


  render() {
    const  {name, location, avatar_url } = this.state
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: siddhesh.ss26@gmail.com</h3>
      </div>
    )
  }
}


export default UserClass