import React from 'react'
import { render, screen, act } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'

import getRoutesMock from './mocks/get-routes.json'
import { App } from './app'

describe('app', () => {
  it('should render select route component by default', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(getRoutesMock))

    await act(async () => {
      render(<App />)
    })

    expect(screen.getByText('Select Route')).toBeInTheDocument()
  })
  it('should render header component by default', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(getRoutesMock))

    await act(async () => {
      render(<App />)
    })

    expect(screen.getByText('NextTrip')).toBeInTheDocument()
  })
})
