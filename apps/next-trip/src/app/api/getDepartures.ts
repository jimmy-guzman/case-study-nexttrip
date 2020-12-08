import { Departures } from '../interfaces'

export const getDepartures = async (
  route: string,
  direction: string,
  stop: string
): Promise<Departures | undefined> => {
  try {
    const response = await fetch(
      `https://svc.metrotransit.org/nextripv2/${route}/${direction}/${stop}`
    )
    const departures = (await response.json()) as Departures

    return departures
  } catch (error) {
    return undefined
  }
}
