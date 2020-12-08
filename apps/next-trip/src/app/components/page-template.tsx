import React from 'react'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
    },
  })
)

export const PageTemplate = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position='static'>
        <Typography variant='h6' className={classes.title}>
          NextTrip
        </Typography>
      </AppBar>
      <Container maxWidth='sm'>
        <Typography variant='h6' className={classes.title}>
          {title}
        </Typography>
        <Grid container direction='column' justify='center' alignItems='center'>
          {children}
        </Grid>
      </Container>
    </>
  )
}
