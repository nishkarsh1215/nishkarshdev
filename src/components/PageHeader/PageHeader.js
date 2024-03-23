import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'
import './App.css'

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="gradient-text">NishKarsh• Developer</h1>
          <h3 className="d-none d-sm-block">
            I Create Unforgettable Games, Build Dynamic Websites, and Engineer
            Seamless Software Experiences!
          </h3>
          <a
            href="https://youtu.be/_nNhngrxRHE?si=_dxPSOuU_gHlxALn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="large-button">Film Reel</button>
          </a>
        </div>
      </Container>
      <h2> I ended</h2>
    </div>
  )
}
