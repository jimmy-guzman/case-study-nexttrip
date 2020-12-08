import React from 'react'
import {
  AppBar,
  Box,
  Container,
  createStyles,
  CssBaseline,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

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
}) => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position='static'>
        <Typography variant='h2' className={classes.title}>
          NextTrip
        </Typography>
      </AppBar>
      <Container maxWidth='sm'>
        <Box mt={4} textAlign='center'>
          <Typography variant='h3'>{title}</Typography>
        </Box>
        <Grid container direction='column' justify='center' alignItems='center'>
          {children}
        </Grid>
      </Container>
    </>
  )
}
