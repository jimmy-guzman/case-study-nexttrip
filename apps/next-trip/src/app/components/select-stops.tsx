import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useStops } from '../hooks'
import { Dropdown } from './dropdown'

export const SelectStops = () => {
  const history = useHistory()
  const { directionId, routeId, stopId } = useParams<{
    directionId: string
    routeId: string
    stopId: string
  }>()
  const stops = useStops(routeId, directionId)

  return (
    <Dropdown
      title='Select Stops'
      options={stops}
      onSelected={(id: string) =>
        history.push(`/${routeId}/${directionId}/${id}`)
      }
      selected={stopId}
      id='select-stops'
    />
  )
}
