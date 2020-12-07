import { useEffect, useState } from 'react'

import { getRoutes as getRoutesApi } from '../api'
import { Route } from '../interfaces'

export const useRoutes = () => {
  const [initialRoutes, setRoutes] = useState<Route[]>([])

  const getRoutes = async () => {
    setRoutes(await getRoutesApi())
  }

  useEffect(() => {
    getRoutes()
  }, [])

  return initialRoutes
}
