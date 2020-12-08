import { useCallback, useEffect, useState } from 'react'

import { getStops as getStopsApi } from '../api'
import { StopOption } from '../interfaces'

export const useStops = (route: string, direction: string): StopOption[] => {
  const [stops, setDirections] = useState<StopOption[]>([])

  const getStops = useCallback(async () => {
    setDirections(await getStopsApi(route, direction))
  }, [route, direction])

  useEffect(() => {
    if (route && direction) {
      getStops()
    }
  }, [getStops, route, direction])

  return stops
}
