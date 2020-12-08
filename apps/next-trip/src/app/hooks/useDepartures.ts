import { useCallback, useEffect, useState } from 'react'

import { getDepartures as getDeparturesApi } from '../api/getDepartures'
import { Departures } from '../interfaces'

export const useDepartures = (
  routeId: string,
  directionId: string,
  stopId: string
) => {
  const [departures, setDepartures] = useState<Departures>()

  const getDepartures = useCallback(async () => {
    setDepartures(await getDeparturesApi(routeId, directionId, stopId))
  }, [routeId, directionId, stopId])

  useEffect(() => {
    getDepartures()
  }, [getDepartures])

  return departures
}
