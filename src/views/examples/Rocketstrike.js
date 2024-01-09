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
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from 'reactstrap'

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js'
import Footer from 'components/Footer/Footer.js'
import IndexNavbar from '../../components/Navbars/IndexNavbar'

const carouselItems = [
  {
    src: require('assets/img/Mutli.png'),
  },
]

let ps = null

export default function Rocketstrike() {
  const [tabs, setTabs] = React.useState(1)
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on'
      document.documentElement.classList.remove('perfect-scrollbar-off')
      let tables = document.querySelectorAll('.table-responsive')
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i])
      }
    }
    document.body.classList.toggle('profile-page')
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy()
        document.documentElement.className += ' perfect-scrollbar-off'
        document.documentElement.classList.remove('perfect-scrollbar-on')
      }
      document.body.classList.toggle('profile-page')
    }
  }, [])

  const handleButtonClick = () => {
    window.location.href = 'https://your-desired-link.com' // Replace with the desired URL
  }

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require('assets/img/dots.png')}
          />
          <img
            alt="..."
            className="path"
            src={require('assets/img/path4.png')}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">RocketStrike</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  I made a game that combines the exhilaration of high-speed
                  rocketry with the precision of navigation. As the rocketeer,
                  you'll harness the full power of your spacecraft, hurtling
                  through space, and face a series of increasingly challenging
                  obstacles that demand quick reflexes and sharp
                  decision-making. The Unity engine brings the game to life with
                  stunning visuals and immersive gameplay. Each obstacle is
                  meticulously designed, from asteroid fields to twisting
                  tunnels, providing a diverse and engaging landscape for
                  players to conquer. The game's responsive controls make it
                  easy for players to master the art of piloting the rocket,
                  offering a sense of both speed and control. "Rocket Escape" is
                  not just about dodging obstacles; it's a race against time.
                  Players can compete for high scores and challenge themselves
                  to beat their own records. The thrill of narrowly avoiding a
                  collision and the rush of accelerating through tight spaces
                  create a gaming experience that is both heart-pounding and
                  addictive. To enhance the gaming experience, players can
                  customize their rockets, unlocking new designs, colors, and
                  even special abilities that aid in navigating the challenging
                  terrain. Whether you prefer a sleek and speedy model or a more
                  robust and resilient spacecraft, the choice is yours. The game
                  features multiple levels, each introducing new obstacles and
                  increasing the difficulty, ensuring that players are
                  continually challenged as they progress. The soundtrack,
                  composed to complement the fast-paced action, further immerses
                  players in the excitement of the cosmic journey.
                </p>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require('assets/img/nishkarsh.jpg')}
                    />
                    <h4 className="title">Details</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault()
                            setTabs(1)
                          }}
                          href="#pablo"
                        >
                          Skills
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={'tab' + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Softwares & Tools</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Unity</td>
                              <td>Blender</td>
                              <td>Cinema4D</td>
                            </tr>
                            <tr>
                              <td>C#</td>
                              <td>Substance Painter</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Row>
                          <Label sm="3">Pay to</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                placeholder="e.g. 1Nasd92348hU984353hfid"
                                type="text"
                              />
                              <FormText color="default" tag="span">
                                Please enter a valid address.
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Amount</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="1.587" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                        >
                          <i className="tim-icons icon-send" />
                        </Button>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Latest Crypto News</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>The Daily: Nexo to Pay on Stable...</td>
                            </tr>
                            <tr>
                              <td>Venezuela Begins Public of Nation...</td>
                            </tr>
                            <tr>
                              <td>PR: BitCanna – Dutch Blockchain...</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Project Portfolio</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  Let's see some snapshots of this amazing project
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={handleButtonClick}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Download
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  )
}
