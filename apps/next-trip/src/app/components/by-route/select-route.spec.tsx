import React from 'react'
import fetchMock from 'jest-fetch-mock'

import getRoutesMock from '../../mocks/get-routes.json'
import { SelectRoute } from './select-route'
import { render, screen, fireEvent } from '../../test-utils'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
  const reactRouteDom = jest.requireActual('react-router-dom')

  return {
    ...reactRouteDom,
    useHistory: () => ({ push: mockHistoryPush }),
  }
})

const setRouteId = jest.fn()

describe('<SelectRoute />', () => {
  it('should render null', async () => {
    await render(<SelectRoute />)

    expect(screen.queryByText('Select Route')).not.toBeInTheDocument()
  })
  it('should render select the appropriate route', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(getRoutesMock))

    await render(<SelectRoute />, {
      routes: [
        { value: '901', text: 'METRO Blue Line' },
        { value: '902', text: 'METRO Green Line' },
        { value: '906', text: 'Airport Shuttle' },
      ],
      setRouteId,
    })

    const selectRoute = await screen.findByLabelText('Select Route')

    fireEvent.mouseDown(selectRoute)

    const route = screen.getByText('METRO Green Line')

    fireEvent.click(route)

    expect(setRouteId).toHaveBeenNthCalledWith(1, '902')
    expect(mockHistoryPush).toHaveBeenNthCalledWith(1, '/902')
  })
})
