import React, { useState, useEffect } from 'react'
import { NavLink, Route, withRouter, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Home'
import About from './About'
import Selina from './Selina'
import Pricing from './Pricing'
import History from './History'

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

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title">
          <span><NavLink to="/">Konrad Schwanecke "HIP 4U"</NavLink></span>
        </div>
        <nav className="header-menu">
          <NavLink className="header-menu-item" activeClassName="active" to="/about">about</NavLink >
          <NavLink className="header-menu-item" activeClassName="active" to="/selina">selina</NavLink >
          <NavLink className="header-menu-item" activeClassName="active" to="/pricing">pricing</NavLink >
          <NavLink className="header-menu-item" activeClassName="active" to="/history">history</NavLink >
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
              <Route path="/pricing" component={Pricing} />
              <Route path="/history" component={History} />
            </Switch>
          </main>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(App)
