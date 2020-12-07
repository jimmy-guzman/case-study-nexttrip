import { SelectOption } from './select-option'

export interface Route extends SelectOption {
  agency_id: number
  route_id: string
  route_label: string
}
