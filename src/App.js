import React from 'react'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'

import {
  Home,
  About,
  Contacts,
  NotFound
} from './pages'

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/about">About</Link>
        &nbsp;
        <Link to="/contacts">Contact us</Link>
      </header>
      <br />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
