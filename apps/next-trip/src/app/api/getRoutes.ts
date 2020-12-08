import { Route } from '../interfaces'

export const getRoutes = async (): Promise<Route[] | []> => {
  try {
    const response = await fetch(
      'https://svc.metrotransit.org/nextripv2/routes'
    )
    const json: Route[] = (await response.json()) as Route[]

    return json.map(route => ({
      ...route,
      text: route.route_label,
      value: route.route_id,
    }))
  } catch (error) {
    return []
  }
}
