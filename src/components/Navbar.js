import React, { Component } from "react"
import { Card, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <Card.Header>
        <Nav className="justify-content-center" variant="tabs" as="ul">
          <Nav.Item className="m-auto" as="li">
            <Nav.Link href="/home" as={Link} to="/home">
              Home <i class="fas fa-home"></i>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="m-auto" as="li">
            <Nav.Link href="/faucet" as={Link} to="/faucet">
              Faucet <i class="fas fa-faucet"></i>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="m-auto" as="li">
            <Nav.Link href="https://github.com/Pandaphobic/erc20-token">
              GitHub <i class="fab fa-github"></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    )
  }
}
