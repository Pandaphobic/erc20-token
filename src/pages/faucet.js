import React, { Component, useState, useEffect } from "react"
import { Card, Button, Row } from "react-bootstrap"
import MetaMaskOnboarding from "@metamask/onboarding"

const ONBOARD_TEXT = "Click here to install MetaMask!"
const CONNECT_TEXT = "Connect"
const CONNECTED_TEXT = "Receive Tokens!"

export function OnboardingButton() {
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT)
  const [isConnected, setIsConnected] = useState(false)
  const [accounts, setAccounts] = useState([])
  const onboarding = React.useRef()

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding()
    }
  }, [])

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(CONNECTED_TEXT)
        setIsConnected(true)
        onboarding.current.stopOnboarding()
      } else {
        setButtonText(CONNECT_TEXT)
        setIsConnected(false)
      }
    }
  }, [accounts])

  useEffect(() => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts)
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then(handleNewAccounts)
      window.ethereum.enable("accountsChanged", handleNewAccounts)
    }
  }, [])

  const onClickConnect = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then(newAccounts => setAccounts(newAccounts))
    } else {
      onboarding.current.startOnboarding()
    }
  }
  const onClickReceive = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then(newAccounts => setAccounts(newAccounts))
    } else {
      onboarding.current.startOnboarding()
    }
  }
  return (
    <Button onClick={isConnected ? onClickConnect : onClickReceive} className="btn w-50 m-auto" style={{ borderRadius: "10px" }} variant={isConnected ? "success" : "warning"} block>
      {buttonText}
    </Button>
  )
}

export default class Faucet extends Component {
  render() {
    return (
      <Card.Body>
        <Card.Title>
          <strong>CALI Faucet</strong>
        </Card.Title>
        <Card.Text>Use the button below to connect to your wallet! Once connected, turn on the faucet and receive a handful of Calista Tokens - for FREE!</Card.Text>
        <Row className="mb-2">
          <OnboardingButton />
        </Row>
      </Card.Body>
    )
  }
}
