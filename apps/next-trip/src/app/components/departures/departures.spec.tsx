import React from 'react'
import fetchMock from 'jest-fetch-mock'

import getDeparturesMock from '../../mocks/get-departures.json'
import { Departures } from './departures'
import { render, screen, fireEvent } from '../../test-utils'

describe('<SelectStop />', () => {
  it('should render loading indicator if no data', async () => {
    await render(<Departures />)

    expect(screen.getByTestId('departures-loading')).toBeInTheDocument()
  })

  it('should render info message if there is no departures', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        departures: [],
        stops: [
          {
            description: 'Nicollet Mall Station',
          },
        ],
      })
    )
    await render(<Departures />)

    expect(
      screen.getByText('No available routes for Nicollet Mall Station')
    ).toBeInTheDocument()
  })

  it('should render departures', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        stops: [
          {
            stop_id: 51408,
            description: 'Nicollet Mall Station',
          },
        ],
        departures: [
          {
            actual: false,
            departure_text: '9:49',
            description: 'to St. Paul-Union Depot',
            route_short_name: 'Green',
            trip_id: '17807992-DEC20-RAIL-Weekday-01',
          },
        ],
      })
    )
    await render(<Departures />)

    expect(screen.getByText('to St. Paul-Union Depot')).toBeInTheDocument()
    expect(screen.getByText('Green')).toBeInTheDocument()
    expect(screen.getByText('9:49')).toBeInTheDocument()
  })

  it('should render "due" indicator', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        stops: [
          {
            stop_id: 51408,
            description: 'Nicollet Mall Station',
          },
        ],
        departures: [
          {
            actual: true,
            departure_text: 'Due',
            description: 'to St. Paul-Union Depot',
            route_short_name: 'Green',
            trip_id: '17807992-DEC20-RAIL-Weekday-01',
          },
        ],
      })
    )
    await render(<Departures />)

    expect(screen.getByTestId('due-indicator')).toBeInTheDocument()
  })
})
