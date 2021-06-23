import React, { Component } from "react"
import { Card, Col, Button, Row } from "react-bootstrap"

export default class Faucet extends Component {
  render() {
    return (
      <Card.Body>
        <Card.Title>CALI Faucet!</Card.Title>
        <Card.Text>Information describing the basic use of the below faucet</Card.Text>
        <Row>
          <Col>
            <Button className="btn btn-block" style={{ borderRadius: "10px" }} variant="warning" block>
              {/* Should change based on the connection status much like matic */}
              Get CALI
            </Button>
          </Col>
        </Row>
      </Card.Body>
    )
  }
}
