import { useCallback, useEffect, useState } from 'react'

import { getDirections as getDirectionsApi } from '../api'
import { Direction } from '../interfaces'

export const useDirections = (route: string): Direction[] => {
  const [directions, setDirections] = useState<Direction[]>([])

  const getDirections = useCallback(async () => {
    setDirections(await getDirectionsApi(route))
  }, [route])

  useEffect(() => {
    if (route) {
      getDirections()
    }
  }, [getDirections, route])

  return directions
}
