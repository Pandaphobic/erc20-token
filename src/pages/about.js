import React, { Component } from "react"
import { Image, Card, Col, Button, Container, Nav, Row } from "react-bootstrap"
const networkName = "localhost:3000"

const cardStyle = {
  borderRadius: "25px",
  margin: "auto",
  maxWidth: "34rem"
}
export default class about extends Component {
  render() {
    return (
      <Container style={{ marginTop: "2em" }}>
        <Row>
          <Col>
            <Card style={cardStyle}>
              <Card.Header style={cardStyle}>
                <Nav defaultActiveKey="/home" as="ul"></Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>My First Ever ERC20 Token!</Card.Title>
                <Card.Text>Thanks for checking out this project! This is my best effort to make a super simple ERC20 including a way of dispearsing it. More details to come!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
