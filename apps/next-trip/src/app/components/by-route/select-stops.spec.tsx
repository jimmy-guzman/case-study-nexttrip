import React from 'react'
import fetchMock from 'jest-fetch-mock'

import getStopsMock from '../../mocks/get-stops.json'
import { SelectStops } from './select-stops'
import { render, screen, fireEvent } from '../../test-utils'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
  const reactRouteDom = jest.requireActual('react-router-dom')

  return {
    ...reactRouteDom,
    useHistory: () => ({ push: mockHistoryPush }),
  }
})

const setStopId = jest.fn()

describe('<SelectStop />', () => {
  it('should render null', async () => {
    await render(<SelectStops />)

    expect(screen.queryByText('Select Stops')).not.toBeInTheDocument()
  })
  it('should render select the appropriate direction', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(getStopsMock))

    await render(<SelectStops />, {
      directionId: '0',
      routeId: '1',
      setStopId,
    })

    const selectStop = await screen.findByLabelText('Select Stops')

    fireEvent.mouseDown(selectStop)

    const stop = screen.getByText('Target Field Station Platform 2')

    fireEvent.click(stop)

    expect(setStopId).toHaveBeenNthCalledWith(1, 'TF22')
    expect(mockHistoryPush).toHaveBeenNthCalledWith(1, '/1/0/TF22')
  })
})
