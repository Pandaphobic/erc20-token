import React, { Component } from "react"
import CalistaToken from "./contracts/CalistaToken.json"
import getWeb3 from "./getWeb3"
import { Image, Card, Col, Button, Container, Nav, Row } from "react-bootstrap"
import CalistaTokenImage from "./assets/Calista Tokens.png"

import "./bootstrap.css"
import { auto } from "@popperjs/core"

const networkName = "localhost:3000"

const cardStyle = {
  borderRadius: "25px",
  margin: auto,
  maxWidth: "34rem"
}

class App extends Component {
  state = { web3: null, accounts: null, contract: null }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3()

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts()
      console.log(accounts)

      /* Get the contract instance.
         The address is the one remix generates
         CalistaToken is the json file known as an ABI imported above
      */
      var instance = new web3.eth.Contract(CalistaToken, "0xD463Fd9C35b5Fdb5c4407c43B93655Cd22767f65")

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample)
      console.log(this.state.contract)
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(`Failed to load web3, accounts, or contract. Check console for details.`)
      console.error(error)
    }
  }

  runExample = async () => {
    const { accounts, contract } = this.state
    // Stores a given value, 5 by default.
    // await contract.methods.args.(5).send({ from: accounts[0] })
    // // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call()
    // // Update state with the result.
    // this.setState({ storageValue: response })
    const response = await contract.methods.balanceOf("0x836db97a1c884Ba9006b42eb99f40f85fb03B1aa").call()
    this.setState({ storageValue: response })
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>
    }
    return (
      <div className="App">
        <style>@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');</style>
        <Container style={{ margin: auto, maxWidth: "34rem" }}>
          <Col md="5"></Col>
          <Col>
            <Image src={CalistaTokenImage} fluid />
          </Col>
          <Col md="5"></Col>
        </Container>

        <Container style={{ marginTop: "2em" }}>
          <Row>
            <Col>
              <Card style={cardStyle}>
                <Card.Header style={cardStyle}>
                  <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                      <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="/" disabled>
                        About
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="link-1" disabled>
                        Faucet
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="link-2" disabled>
                        GitHub
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
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
              </Card>
            </Col>
          </Row>
        </Container>

        {/* <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>If your contracts compiled and migrated successfully, below you should see the total CALI owned by the currently selected account</p>

        <div>
          The stored value is: <strong>{this.state.storageValue}</strong>
        </div> */}
      </div>
    )
  }
}

export default App
