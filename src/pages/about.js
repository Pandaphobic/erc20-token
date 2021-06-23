import React, { Component } from "react"
import { Card } from "react-bootstrap"

export default class About extends Component {
  render() {
    return (
      <Card.Body>
        <Card.Title>My First Ever ERC20 Token!</Card.Title>
        <Card.Text>Thanks for checking out this project! This is my best effort to make a super simple ERC20 including a way of dispearsing it. More details to come!</Card.Text>
      </Card.Body>
    )
  }
}
