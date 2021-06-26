import React, { Component } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import Navbar from "./Navbar"

const cardStyle = {
  borderRadius: "25px",
  margin: "auto",
  maxWidth: "34rem"
}
export default class MainCard extends Component {
  render() {
    return (
      <Container style={{ marginTop: "2em", marginBottom: "2em" }}>
        <Row>
          <Col>
            <Card style={cardStyle}>
              <Navbar />
              {this.props.page}
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
