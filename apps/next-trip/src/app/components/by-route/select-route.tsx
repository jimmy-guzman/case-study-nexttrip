import React from 'react'
import { useHistory } from 'react-router-dom'

import { useBaseContext } from '../../providers'
import { Dropdown } from '../dropdown'

export const SelectRoute = () => {
  const history = useHistory()
  const { routes, routeId, setRouteId } = useBaseContext()

  if (!routes) return null

  return (
    <Dropdown
      title='Select Route'
      options={routes}
      onSelected={(id: string) => {
        setRouteId(id)
        history.push(`/${id}`)
      }}
      selected={routeId || ''}
      id='select-route'
    />
  )
}
