import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useDirections } from '../hooks'
import { useBaseContext } from '../providers'
import { Dropdown } from './dropdown'

export const SelectDirection = () => {
  const history = useHistory()
  const { routeId, directionId, setDirectionId } = useBaseContext()
  const directions = useDirections(routeId)

  if (!routeId) return null

  return (
    <Dropdown
      title='Select Direction'
      options={directions}
      onSelected={(id: string) => {
        setDirectionId(id)
        history.push(`/${routeId}/${id}`)
      }}
      selected={directionId}
      id='select-direction'
    />
  )
}
