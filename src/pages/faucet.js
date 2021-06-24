import React, { Component } from "react"
import { Card, Button, Row } from "react-bootstrap"

export default class Faucet extends Component {
  render() {
    return (
      <Card.Body>
        <Card.Title>CALI Faucet!</Card.Title>
        <Card.Text>Information describing the basic use of the below faucet</Card.Text>
        <Row>
          <Button className="btn w-50 m-auto" style={{ borderRadius: "10px" }} variant="success" block>
            Get CALI Tokens!
          </Button>
        </Row>
      </Card.Body>
    )
  }
}
