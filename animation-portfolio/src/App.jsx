import React from 'react'
import Nav from './componets/nav/nav'
import Home from './componets/Home/Home'
import About from './componets/about/About'
import Projects from './componets/Projects/Projects'
import Contact from './componets/Contact/Contact'

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
