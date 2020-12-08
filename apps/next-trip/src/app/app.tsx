import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {
  Departures,
  PageTemplate,
  SelectDirection,
  SelectRoute,
  SelectStops,
} from './components'
import { BaseProvider } from './providers'

export const App = () => {
  return (
    <Router>
      <BaseProvider>
        <PageTemplate title='Real-time Departures'>
          <Route path='/'>
            <SelectRoute />
            <SelectDirection />
            <SelectStops />
          </Route>
          <Route path='/:routeId/:directionId/:stopId'>
            <Departures />
          </Route>
        </PageTemplate>
      </BaseProvider>
    </Router>
  )
}
