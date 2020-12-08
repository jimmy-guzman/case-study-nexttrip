import React from 'react'
import { render, act } from '@testing-library/react'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { BaseContext } from './providers'

const customRender = async (
  ui: React.ReactNode,
  value = {},
  route = '/',
  options = {}
) => {
  const history = createMemoryHistory({ initialEntries: [route] })
  let utils

  await act(async () => {
    utils = render(
      <Router history={history}>
        <BaseContext.Provider value={value as BaseContext}>
          <Route path={route}>{ui}</Route>
        </BaseContext.Provider>
      </Router>,
      options
    )
  })

  return utils
}

export * from '@testing-library/react'

export { customRender as render }
