import React from 'react'
import fetchMock from 'jest-fetch-mock'

import getDirectionsMock from '../../mocks/get-directions.json'
import { SelectDirection } from './select-direction'
import { render, screen, fireEvent } from '../../test-utils'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
  const reactRouteDom = jest.requireActual('react-router-dom')

  return {
    ...reactRouteDom,
    useHistory: () => ({ push: mockHistoryPush }),
  }
})

const setDirectionId = jest.fn()

describe('<SelectDirection />', () => {
  it('should render null', async () => {
    await render(<SelectDirection />)

    expect(screen.queryByText('Select Direction')).not.toBeInTheDocument()
  })
  it('should render select the appropriate direction', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(getDirectionsMock))

    await render(<SelectDirection />, {
      routeId: '1',
      directionId: '',
      setDirectionId,
    })

    const selectDirection = await screen.findByLabelText('Select Direction')

    fireEvent.mouseDown(selectDirection)

    const direction = screen.getByText('Westbound')

    fireEvent.click(direction)

    expect(setDirectionId).toHaveBeenNthCalledWith(1, '1')
    expect(mockHistoryPush).toHaveBeenNthCalledWith(1, '/1/1')
  })
})
