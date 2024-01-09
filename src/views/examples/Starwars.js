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
    src: require('assets/img/Starship.png'),
  },
  {
    src: require('assets/img/Star2.png'),
  },
]

let ps = null

export default function Starwars() {
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
    window.location.href =
      'https://drive.google.com/file/d/1SUzuVkOe2stPM9aSeRcUCdrj1U19QVeI/view?usp=sharing' // Replace with the desired URL
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
                <h1 className="profile-title text-left">Star Wars</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  I made a game that thrusts players into an intergalactic
                  battleground where epic space wars unfold in three dimensions.
                  Piloting their own formidable space ship, players embark on a
                  thrilling journey to engage and obliterate enemy spacecraft in
                  intense star war combat. As a space-faring warrior, you're not
                  just a pilot; you're the last line of defense against an alien
                  armada determined to conquer the galaxy. With your fingers on
                  the controls, you navigate through the vastness of space,
                  encountering a variety of enemy ships equipped with advanced
                  weaponry and cunning tactics. The game's immersive 3D
                  environment allows players to experience the vastness of the
                  cosmos, with planets, nebulas, and distant stars forming a
                  visually stunning backdrop. Your spacecraft is equipped with a
                  range of weapons, from laser cannons to guided missiles,
                  giving you the firepower needed to take on the relentless
                  onslaught of enemy vessels. The space war is not a
                  straightforward dogfight; it's a dynamic battlefield where
                  enemies come at you from all directions. Your ship is agile,
                  capable of performing barrel rolls, sharp turns, and evasive
                  maneuvers to dodge enemy fire. Timing and precision are
                  crucial as you lock onto targets and unleash devastating
                  salvos to secure victory. To add depth to the gameplay,
                  players can customize their spacecraft, choosing from various
                  ship types, weapons, and defensive systems. Each decision
                  influences the outcome of the star war, allowing for a
                  personalized and strategic approach to each battle. As you
                  progress through the game, the stakes get higher, and the
                  enemies become more formidable. Boss battles present
                  formidable challenges, requiring not just firepower but also
                  tactical prowess to exploit weaknesses and emerge victorious.
                  Whether you're engaging in intense one-on-one dogfights or
                  participating in large-scale space skirmishes, every encounter
                  in this 3D star war fighting game is a test of skill,
                  strategy, and reflexes. Can you rise through the ranks, become
                  the ultimate space-faring hero, and save the galaxy from
                  impending doom? The fate of the cosmos rests in your hands.
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
