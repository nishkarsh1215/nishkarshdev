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
import videoSource from 'assets/img/design.mp4'

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js'
import PageHeader from 'components/PageHeader/PageHeader.js'
import Footer from 'components/Footer/Footer.js'

// sections for this page/view
import Basics from 'views/IndexSections/Basics.js'
import Navbars from 'views/IndexSections/Navbars.js'
import Tabs from 'views/IndexSections/Tabs.js'
import Pagination from 'views/IndexSections/Pagination.js'
import Notifications from 'views/IndexSections/Notifications.js'
import Typography from 'views/IndexSections/Typography.js'
import JavaScript from 'views/IndexSections/JavaScript.js'
import NucleoIcons from 'views/IndexSections/NucleoIcons.js'
import Signup from 'views/IndexSections/Signup.js'
import Examples from 'views/IndexSections/Examples.js'
import Download from 'views/IndexSections/Download.js'
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  UncontrolledCarousel,
  UncontrolledTooltip,
} from 'reactstrap'

const carouselItems = [
  {
    src:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0FR8sV4BzndvXFvjp3EUopHkGOfndn3rov3SJdt_sVe_nimaNz4634DM4nL6CFpevEmYs8OjW3AQ0XhtC6xt-u8qu94xhlAIBmikYmHoKtvsgMulXJHhd561O0HfxaajvdN42kgoE_J4QigLuwQ954yIL74yfd2P9z86OW7Gmzi5aXPRm-w0xE4YIYmp-/s1920/0005.png',
  },
  {
    src:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsteaFFxY18nqX4pdSJsUDqfnlyW_j53EwzMlXPXvflzOA5OOt2BP3c43-J5B7Rjqffd7baGn2vDlXoO7aH1BVo8ccjDZncGSzJ0E6anNc1hWVYIRPmnzDPRuSnC_ADoWn8kQIOi7OsUM1dU3N6sVorLuSlrS0qxNWpmUTUN71bMrTFUNfh9CEJWNAuBJC/s1920/horror_render.png',
  },
  {
    src:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7qFBvfy7w2caENpKSOpwis8jAv9DN5quOZKnaUvKUPG8hJKoYUL73QzlgXoAaTZU91AnsgDkHGeK55FcHV2Jr2p2D3jIt7UWv5MNh-6tjJ57MEz9cvKKpPpt8krymi_fWv82HjrVakuBHxIMY3qgN-qqAyA81S4DRTK_c5HNCXZ1TSnbcIGvUKY7RP65E/s1600/1672906146798894-0.jpg',
  },
  {
    src:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg318L6I1S60vd3IF3z3gxpcmnIZE4Cv_C_p9dP-UIjMi2sCvQOlAA6VQSDFVBJ70uTuUI4JXdmRXKwT-SLUBHrUMYovdaDAITYkLaI_nEfoD-uQNnJJNQn-kSSmgzidDkrzhIPcWK034Q98sPCnVjoe1oYtqf5ZFuiD7upBSU45Hk5tykY0xGsLNd9prOr/s1920/destructivetornado002.png',
  },
  {
    src:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEik4-usaEWEbVa4T9a5tpWEjwUAQOGedi7mxakGZOBsSAUmWaxTOxFM21LM5V2JbbNIcNqtm3D9FzArbSAMm27Ph8T3PiBiAOJ-HGh5QTGtSCS6ocGKryELYLFEh2K0MAoXrA-o-D680Lc4fZsWLcykmRY48FPlty5cPKTqgSrAuKsk10Zfq1CuePFeRGjE/s1920/thubnail.png',
  },
]

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle('index-page')
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle('index-page')
    }
  }, [])
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">What Amazing can I make?</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">Stunning Websites</h4>
                        <hr className="line-primary" />
                        <p>
                          I Make Websites Come Alive with React, Next.js, and
                          Node.js – Crafting Dynamic Experiences That Leave a
                          Lasting Impression!
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">Cool Games</h4>
                        <hr className="line-warning" />
                        <p>
                          I Make Cool Multiplayer Experiences in Unity and
                          Unreal Engine, Crafting Digital Realms Where Fun Knows
                          No Bounds!
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">3D Artist and UI/UX</h4>
                        <hr className="line-success" />
                        <p>
                          I Make Stunning Visual Worlds in Blender, C4D, and
                          Beyond – Where Imagination Takes Shape!
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg section-safe pb-0">
            <img
              alt="..."
              className="path"
              src={require('assets/img/path5.png')}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <video
                    autoPlay
                    muted // Mute the video to comply with autoplay policies
                    playsInline // Enable playing inline on mobile devices
                    className="img-fluid floating"
                    src={videoSource}
                    type="video/mp4"
                    alt="Video"
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">Game Dev</CardTitle>
                          <p className="card-category text-white"></p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">Web Dev</CardTitle>
                          <p className="card-category text-white"></p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">AI-ML</CardTitle>
                          <p className="card-category text-white"></p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Skills</h3>
                    <p>
                      My skill is the thread that weaves innovation,
                      craftsmanship, and passion together—a unique pattern that
                      defines my journey and colors the world with endless
                      possibilities.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Web Dev</h6>
                            <p>
                              {' '}
                              React, NextJS, Redux, Node JS, Typescript &
                              more...{' '}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Game Dev</h6>
                            <p>
                              Unity, Unreal Engine, Photon, Blender, C4D &
                              more..{' '}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>AI & ML</h6>
                            <p>
                              Machine Learning, Deep Learning, Computer Vision,
                              NLP & more..
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pb-1 pt-1">
            <Col md="4">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <hr className="line-info" />
                      <h5 className="card-category">3D</h5>
                      <CardTitle tag="h2">Art</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </section>
          <div className="section pt-1 pb-1">
            <Container>
              <Row className="justify-content-center">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <section className="section section-lg pb-1 pt-1">
            <Col md="4">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <hr className="line-info" />
                      <h5 className="card-category">Cool</h5>
                      <CardTitle tag="h2">Projects</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </section>

          <Examples />
        </div>
        <Signup />
        <Footer />
      </div>
    </>
  )
}
