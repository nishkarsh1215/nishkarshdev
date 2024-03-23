import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import 'assets/css/nucleo-icons.css'
import 'assets/scss/blk-design-system-react.scss'
import 'assets/demo/demo.css'

import Index from 'views/Index.js'
import LandingPage from 'views/examples/LandingPage.js'
import RegisterPage from 'views/examples/RegisterPage.js'
import ProfilePage from 'views/examples/ProfilePage.js'
///
import Eyevib from 'views/examples/Eyevib.js'
import Oceansquad from 'views/examples/Oceansquad.js'
import Castlerush from 'views/examples/Castlerush'
import Starwars from 'views/examples/Starwars.js'
import Onlinemulti from 'views/examples/Onlinemulti.js'
import Rocketstrike from 'views/examples/Rocketstrike.js'
import Machine from 'views/examples/Machine.js'
import Counter from 'views/examples/Counter.js'
import ServerGame from 'views/examples/servergame'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/eyevib" element={<Eyevib />} />
      <Route path="/oceansquad" element={<Oceansquad />} />
      <Route path="/castlerush" element={<Castlerush />} />
      <Route path="/starwars" element={<Starwars />} />
      <Route path="/onlinemulti" element={<Onlinemulti />} />
      <Route path="/rocketstrike" element={<Rocketstrike />} />
      <Route path="/machine" element={<Machine />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/server" element={<ServerGame />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>,
)
