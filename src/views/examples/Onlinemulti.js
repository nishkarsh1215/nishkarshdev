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

export default function Onlinemulti() {
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
                <h1 className="profile-title text-left">Online Multi Hero</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  I'm thrilled to introduce a dynamic online multiplayer 2D game
                  that takes the excitement of combat to a whole new level.
                  Drawing inspiration from the adrenaline-pumping action of Mini
                  Militia, I've created an engaging gaming experience that
                  brings friends and players from around the world together in
                  epic battles. In this game, powered by Photon, players enter a
                  vibrant 2D world teeming with diverse landscapes, strategic
                  obstacles, and explosive weaponry. The objective is simple yet
                  intense: outmaneuver and outgun opponents to secure victory
                  and climb the ranks of the leaderboard. Photon, our robust
                  multiplayer networking solution, ensures seamless connectivity
                  and real-time interactions between players. Dive into frenetic
                  battles where every move, every shot, and every tactical
                  decision can turn the tide of the match. Whether you're
                  teaming up with friends or facing off against foes in a
                  free-for-all, the online multiplayer aspect adds a layer of
                  unpredictability and excitement to every encounter.
                  Customization is a key feature of the game. Players can
                  personalize their characters with a variety of skins, outfits,
                  and accessories, making each warrior unique on the
                  battlefield. Additionally, a diverse arsenal of weapons, from
                  rapid-fire machine guns to explosive grenades, provides a
                  wealth of strategic options to suit different playstyles. The
                  game features multiple maps, each with its own set of
                  challenges and opportunities for strategic gameplay. From
                  dense jungles to urban landscapes, players must adapt their
                  tactics to the environment, adding an extra layer of depth to
                  the combat experience. Teamwork is crucial for success, and
                  players can form alliances, communicate through in-game chat,
                  and coordinate strategies to dominate opponents. The game's
                  intuitive controls make it easy for both seasoned gamers and
                  newcomers to jump in and experience the fast-paced,
                  action-packed gameplay. Regular updates and new content keep
                  the game fresh, introducing new maps, weapons, and features to
                  keep players engaged and excited. With a vibrant online
                  community and competitive multiplayer modes, the game invites
                  players to test their skills and rise through the ranks to
                  become the ultimate 2D multiplayer warrior. Get ready to
                  experience the thrill of online multiplayer combat like never
                  before. Are you prepared to enter the battlefield, forge
                  alliances, and emerge victorious in this action-packed 2D
                  gaming adventure? The battle awaits, and only the strongest
                  will triumph!
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
                              <td>Photon</td>
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
                    onClick={(e) => e.preventDefault()}
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
