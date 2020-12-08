import React from 'react'
import { render, act } from '@testing-library/react'

import { BaseContext } from './providers'

const customRender = async (ui: React.ReactNode, value = {}, options = {}) => {
  let utils

  await act(async () => {
    utils = render(
      <BaseContext.Provider value={value as BaseContext}>
        {ui}
      </BaseContext.Provider>,
      options
    )
  })

  return utils
}

export * from '@testing-library/react'

export { customRender as render }
