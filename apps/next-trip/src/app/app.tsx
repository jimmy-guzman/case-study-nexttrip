import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import { useRoutes, useDirections, useStops } from './hooks'
import { Dropdown } from './components'

export function App() {
  const [route, setRoute] = useState('')
  const [direction, setDirection] = useState('')
  const [stop, setStop] = useState('')
  const routes = useRoutes()
  const directions = useDirections(route)
  const stops = useStops(route, direction)

  return (
    <Container maxWidth='sm'>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Dropdown
          title='Select Route'
          options={routes}
          onSelected={setRoute}
          selected={route}
          id='select-route'
        />
        {directions.length ? (
          <Dropdown
            title='Select Direction'
            options={directions}
            onSelected={setDirection}
            selected={direction}
            id='select-direction'
          />
        ) : null}
        {stops.length ? (
          <Dropdown
            title='Select Stop'
            options={stops}
            onSelected={setStop}
            selected={stop}
            id='select-stop'
          />
        ) : null}
      </Grid>
    </Container>
  )
}
