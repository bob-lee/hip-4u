import React, { useState, useEffect } from 'react'
import { NavLink, Route, withRouter, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Home'
import About from './About'
import Selina from './Selina'
import Personal from './Personal'
import History from './History'
import Certificates from './Certificates'
import Pricing from './Pricing'

if (typeof window !== 'undefined') {
  require('./App.css')
}

const timeout = { enter: 1000, exit: 1000 }

const App = (props) => {
  const [titleWork, setTitleWork] = useState('work')

  useEffect(() => {
    const pathname = props.location.pathname // '/', '/profile', or '/work/painting'
    const frags = pathname.split('/')
    const len = frags.length
    const _titleWork = (len === 3 && frags[1] === 'work') ? frags[2] : 'work'
  
    if (_titleWork !== titleWork) {
      setTitleWork(_titleWork)
      console.info('setTitleWork', _titleWork, frags)
    }
  }, [props.location.pathname, titleWork])
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer:coarse)').matches

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title">
          <NavLink to="/"><img src="/images/logo_hip4u.jpg" alt="logo hip4u" /></NavLink>
        </div>
        <nav className="header-menu">
          <NavLink className="header-menu-item" activeClassName="active" to="/about">about</NavLink >
          <NavLink className="header-menu-item" activeClassName="active" to="/selina">selina</NavLink >
          <NavLink className="header-menu-item" activeClassName="active" to="/personal">personal</NavLink >
          <NavLink className="header-menu-item" activeClassName="active" to="/history">history</NavLink >
          <NavLink className="header-menu-item" activeClassName="active" to="/certificates">certificates</NavLink >
          <NavLink className="header-menu-item" activeClassName="active" to="/pricing">pricing</NavLink >
        </nav>

      </header>

      <TransitionGroup>
        <CSSTransition
          classNames="slide"
          key={props.location.key}
          timeout={timeout}>
          <main >
            <Switch location={props.location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/selina" component={Selina} />
              <Route path="/personal" component={Personal} />
              <Route path="/history" component={History} />
              <Route path="/certificates" component={Certificates} />
              <Route path="/pricing" component={Pricing} />
            </Switch>
          </main>
        </CSSTransition>
      </TransitionGroup>

      <footer>
        Contact: Konrad Schwanecke&nbsp;&nbsp;
        <a {...isTouchDevice ? { href: 'tel:+646377027' } : {}}>
          <i className="fa fa-phone" aria-hidden="true"></i>
          &nbsp;(06) 377-027
        </a>&nbsp;&nbsp;(appointments)&nbsp; 
        <a {...isTouchDevice ? { href: 'tel:+64211894095' } : {}}>
          <i className="fa fa-phone" aria-hidden="true"></i>
          &nbsp;021-189-4095
        </a>&nbsp;&nbsp; 
        <a href="mailto:dr.Kjschwanecke@xtra.co.nz">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          &nbsp;dr.Kjschwanecke@xtra.co.nz
        </a>
      </footer>
    </div>
  )
}

export default withRouter(App)
