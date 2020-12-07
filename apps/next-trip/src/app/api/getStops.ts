import { Stop } from '../interfaces'

export const getStops = async (
  route: string,
  direction: string
): Promise<Stop[]> => {
  const response = await fetch(
    `https://svc.metrotransit.org/nextripv2/stops/${route}/${direction}`
  )
  const json = (await response.json()) as Stop[]

  return json.map(stop => ({
    ...stop,
    text: stop.description,
    value: stop.place_code,
  }))
}
