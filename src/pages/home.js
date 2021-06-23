import React, { Component } from "react"
import { Card, Col, Button, Row } from "react-bootstrap"
const networkName = "localhost:3000"

export default class Home extends Component {
  render() {
    return (
      <Card.Body>
        <Card.Title>Connect Your Wallet to Get Started!</Card.Title>
        <Card.Text>Use your Metamask wallet and connect to {networkName}</Card.Text>
        <Row>
          <Col>
            <Button className="btn btn-block" style={{ borderRadius: "10px" }} variant="warning" block>
              Connect
            </Button>
          </Col>
        </Row>
      </Card.Body>
    )
  }
}
