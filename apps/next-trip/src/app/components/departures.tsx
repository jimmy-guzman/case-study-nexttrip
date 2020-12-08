import React, { Fragment } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import Box from '@material-ui/core/Box'

import { useDepartures } from '../hooks'
import { Params } from '../interfaces'

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 650,
    },
  })
)

export const Departures = () => {
  const classes = useStyles()
  const { routeId, directionId, stopId } = useParams<Params>()
  const data = useDepartures(routeId, directionId, stopId)

  if (!data) return <CircularProgress />

  const rows = data?.departures.map(departure => ({
    actual: departure.actual,
    departs: departure.departure_text,
    destination: departure.description,
    id: departure.trip_id,
    route: departure.route_short_name,
  }))

  return (
    <Box mt={4} alignItems='center'>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'
      >
        {data.stops.map(stop => (
          <Fragment key={stop.stop_id}>
            <Typography variant='h4'>{stop.description}</Typography>
            <Typography variant='h4'>{stop.stop_id}</Typography>
          </Fragment>
        ))}
      </Grid>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='departures table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Route</TableCell>
              <TableCell align='left'>Destination</TableCell>
              <TableCell align='right'>Departs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row'>
                  {row.route}
                </TableCell>
                <TableCell align='left'>{row.destination}</TableCell>
                <TableCell align='right'>
                  {row.actual && (
                    <DirectionsBusIcon color='primary' fontSize='small' />
                  )}
                  {row.departs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
