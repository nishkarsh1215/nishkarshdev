/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap'

export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false)
  const [emailFocus, setEmailFocus] = React.useState(false)
  const [passwordFocus, setPasswordFocus] = React.useState(false)

  const EmailButton = ({ email, subject, body }) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    const handleButtonClick = () => {
      window.location.href = mailtoLink
    }

    return (
      <Button
        className="btn-round"
        color="primary"
        size="lg"
        onClick={handleButtonClick}
      >
        Get Started via Email
      </Button>
    )
  }
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            <h3 className="display-3 text-white">
              I want to Contact You{' '}
              <span className="text-white">NishKarsh•</span>
            </h3>
            <p className="text-white mb-3">
              “You may say I'm a dreamer, but I'm not the only one. I hope
              someday you'll join us. And the world will live as one.” ― John
              Lennon
            </p>
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <Card className="card-register">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require('assets/img/square-purple-1.png')}
                />
                <CardTitle tag="h4">Let's Talk</CardTitle>
              </CardHeader>

              <CardFooter>
                <Link to="/your-target-page">
                  {' '}
                  {/* Replace "/your-target-page" with the desired URL */}
                  <EmailButton
                    email="nishkarsh1215@gmail.com"
                    subject="I wanna give an order"
                    body="I hope this email finds you well.Let's discuss about our project."
                  />
                </Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
