import React from 'react'
import { useHistory } from 'react-router-dom'

import { useStops } from '../../hooks'
import { useBaseContext } from '../../providers'
import { Dropdown } from '../dropdown'

export const SelectStops = () => {
  const history = useHistory()
  const { routeId, directionId, stopId, setStopId } = useBaseContext()
  const stops = useStops(routeId, directionId)

  if (!directionId) return null

  return (
    <Dropdown
      title='Select Stops'
      options={stops}
      onSelected={(id: string) => {
        setStopId(id)
        history.push(`/${routeId}/${directionId}/${id}`)
      }}
      selected={stopId}
      id='select-stops'
    />
  )
}
