import React from 'react'

import { SelectDirection } from './select-direction'
import { SelectRoute } from './select-route'
import { SelectStops } from './select-stops'

export const ByRoute = () => {
  return (
    <>
      <SelectRoute />
      <SelectDirection />
      <SelectStops />
    </>
  )
}
