import { SelectOption } from './select-option'

export interface StopOption extends SelectOption {
  description: string
  place_code: string
}
