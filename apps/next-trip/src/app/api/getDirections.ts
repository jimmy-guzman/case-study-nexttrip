import { Direction } from '../interfaces'

export const getDirections = async (
  route: string
): Promise<Direction[] | []> => {
  try {
    const response = await fetch(
      `https://svc.metrotransit.org/nextripv2/directions/${route}`
    )
    const json = (await response.json()) as Direction[]

    return json.map(direction => ({
      ...direction,
      text: direction.direction_name,
      value: direction.direction_id.toString(),
    }))
  } catch (error) {
    return []
  }
}
