import React, { Component } from "react"
import { Card, Button, Row } from "react-bootstrap"
const networkName = "localhost:3000"

export default class Home extends Component {
  render() {
    return (
      <Card.Body>
        <Card.Title>Connect Your Wallet to Get Started!</Card.Title>
        <Card.Text>Use your Metamask wallet and connect to {networkName}</Card.Text>
        <Row>
          <Button className="btn w-50 m-auto" style={{ borderRadius: "10px" }} variant="warning" block>
            Connect
          </Button>
        </Row>
      </Card.Body>
    )
  }
}
