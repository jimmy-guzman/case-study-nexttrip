import React, { createContext, useContext, useState } from 'react'

import { useRoutes } from '../hooks'
import { Departures, Direction, Route, Stop } from '../interfaces'

export interface BaseContext {
  routes: Route[]
  directions?: Direction[]
  stops?: Stop[]
  departures?: Departures
  routeId: string
  setRouteId: (id: string) => void
  directionId: string
  setDirectionId: (id: string) => void
  stopId: string
  setStopId: (id: string) => void
}

export const BaseContext = createContext<BaseContext | undefined>(undefined)

export const useBaseContext = () => {
  const context = useContext(BaseContext)

  if (!context) throw new Error('useBaseContext must be inside BasePage')

  return context
}

export const BaseProvider = ({ children }: { children: React.ReactNode }) => {
  const routes = useRoutes()
  const [routeId, setRouteId] = useState('')
  const [directionId, setDirectionId] = useState('')
  const [stopId, setStopId] = useState('')

  return (
    <BaseContext.Provider
      value={{
        directionId,
        routeId,
        routes,
        setDirectionId,
        setRouteId,
        setStopId,
        stopId,
      }}
    >
      {children}
    </BaseContext.Provider>
  )
}
