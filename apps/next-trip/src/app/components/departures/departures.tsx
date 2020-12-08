import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

import { useDepartures } from '../../hooks'
import { Params } from '../../interfaces'

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      minWidth: 600,
    },
    alert: {
      width: '100%',
    },
  })
)

export const Departures = () => {
  const classes = useStyles()
  const { routeId, directionId, stopId } = useParams<Params>()
  const data = useDepartures(routeId, directionId, stopId)

  if (!data) return <CircularProgress />

  if (!data?.departures.length)
    return (
      <Alert severity='info' className={classes.alert}>
        <AlertTitle>Info</AlertTitle>
        {`No available routes for ${data.stops[0].description}`}
      </Alert>
    )

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
