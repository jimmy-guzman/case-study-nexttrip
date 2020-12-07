import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useRoutes } from '../hooks'
import { Dropdown } from './dropdown'

export const SelectRoute = () => {
  const history = useHistory()
  const { routeId } = useParams<{ routeId: string }>()
  const routes = useRoutes()

  return (
    <Dropdown
      title='Select Route'
      options={routes}
      onSelected={(id: string) => history.push(`/${id}`)}
      selected={routeId}
      id='select-route'
    />
  )
}
