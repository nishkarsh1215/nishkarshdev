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
import { Link } from 'react-router-dom'
// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap'

export default function Examples() {
  return (
    <div
      className="section section-examples pt-0"
      data-background-color="black"
    >
      <img alt="..." className="path" src={require('assets/img/path1.png')} />
      <div className="space-20" />
      <Container className="text-center">
        <Row>
          <Col sm="6">
            <Link to="/eyevib">
              <img
                alt="..."
                className="img-raised"
                src={require('assets/img/Eyevib.png')}
                style={{ marginBottom: '20px' }}
              />
            </Link>
            <h2>EyeVib - SAIL</h2>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/eyevib"
              tag={Link}
              style={{ marginBottom: '30px' }}
            >
              View
            </Button>
          </Col>
          <Col sm="6">
            <Link to="/oceansquad">
              <img
                alt="..."
                className="img-raised"
                src={require('assets/img/Shark.png')}
                style={{ marginBottom: '20px' }}
              />
            </Link>
            <h2>Ocean Squad - Parody Studios</h2>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/oceansquad"
              tag={Link}
              style={{ marginBottom: '30px' }}
            >
              View
            </Button>
          </Col>
          <Col sm="6">
            <Link to="/castlerush">
              <img
                alt="..."
                className="img-raised"
                src={require('assets/img/Argon.png')}
                style={{ marginBottom: '20px' }}
              />
            </Link>
            <h2>Castle Rush</h2>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/castlerush"
              tag={Link}
              style={{ marginBottom: '30px' }}
            >
              View
            </Button>
          </Col>
          <Col sm="6">
            <Link to="profile-page">
              <img
                alt="..."
                className="img-raised"
                src={require('assets/img/Starship.png')}
                style={{ marginBottom: '20px' }} // Adjust the margin-bottom value as needed
              />
            </Link>

            <h2>Star Wars</h2>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/starwars"
              tag={Link}
              style={{ marginBottom: '30px' }}
            >
              View
            </Button>
          </Col>
          <Col sm="6">
            <Link to="/onlinemulti">
              <img
                alt="..."
                className="img-raised"
                src={require('assets/img/Mutli.png')}
                style={{ marginBottom: '20px' }}
              />
            </Link>
            <h2>Online Multi Hero</h2>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/onlinemulti"
              tag={Link}
              style={{ marginBottom: '30px' }}
            >
              View
            </Button>
          </Col>

          <Col sm="6">
            <Link to="/rocketstrike">
              <img
                alt="..."
                className="img-raised"
                src={require('assets/img/Brown.png')}
                style={{ marginBottom: '20px' }}
              />
            </Link>
            <h2>Rocket Strike</h2>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/rocketstrike"
              tag={Link}
              style={{ marginBottom: '30px' }}
            >
              View
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
