import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { SelectDirection, SelectRoute, SelectStops } from './components'

export const App = () => {
  return (
    <Router>
      <Container maxWidth='sm'>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Route path='/'>
            <SelectRoute />
          </Route>
          <Route path='/:routeId'>
            <SelectDirection />
          </Route>
          <Route path='/:routeId/:directionId'>
            <SelectStops />
          </Route>
        </Grid>
      </Container>
    </Router>
  )
}
