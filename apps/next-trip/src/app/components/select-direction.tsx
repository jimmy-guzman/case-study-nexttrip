import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useDirections } from '../hooks'
import { Dropdown } from './dropdown'

export const SelectDirection = () => {
  const history = useHistory()
  const { directionId, routeId } = useParams<{
    directionId: string
    routeId: string
  }>()
  const directions = useDirections(routeId)

  return (
    <Dropdown
      title='Select Direction'
      options={directions}
      onSelected={(id: string) => history.push(`/${routeId}/${id}`)}
      selected={directionId}
      id='select-direction'
    />
  )
}
