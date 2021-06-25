import React, { Component, useState, useEffect } from "react"
import { Card, Button, Row, Badge } from "react-bootstrap"
import MetaMaskOnboarding from "@metamask/onboarding"

const ONBOARD_TEXT = "Click here to install MetaMask!"
const CONNECT_TEXT = "Connect"
const CONNECTED_TEXT = "Connected"

export function OnboardingButton() {
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT)
  const [isDisabled, setDisabled] = useState(false)
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
        setDisabled(true)
        onboarding.current.stopOnboarding()
      } else {
        setButtonText(CONNECT_TEXT)
        setDisabled(false)
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

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then(newAccounts => setAccounts(newAccounts))
    } else {
      onboarding.current.startOnboarding()
    }
  }
  return (
    <Button disabled={isDisabled} onClick={onClick} className="btn w-50 m-auto" style={{ borderRadius: "10px" }} variant={isDisabled ? "success" : "warning"} block>
      {buttonText}
    </Button>
  )
}

export default class Faucet extends Component {
  render() {
    return (
      <Card.Body>
        <Card.Title>CALI Faucet!</Card.Title>
        <Card.Text>Use the button below to connect to your wallet! Once connect, </Card.Text>
        <Row>
          <OnboardingButton />
        </Row>
      </Card.Body>
    )
  }
}
