import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Departures, PageTemplate, ByRoute } from './components'
import { BaseProvider } from './providers'

export const App = () => {
  return (
    <Router>
      <BaseProvider>
        <PageTemplate title='Real-time Departures'>
          <Route path='/'>
            <ByRoute />
          </Route>
          <Route path='/:routeId/:directionId/:stopId'>
            <Departures />
          </Route>
        </PageTemplate>
      </BaseProvider>
    </Router>
  )
}
