import { actions, assert } from '../support/app.po'

describe('next-trip', () => {
  it('should show departures when the user completes fields', () => {
    cy.visit('/')

    actions.selectRoute('METRO Green Line')
    actions.selectDirection('Westbound')
    actions.selectStops('Central Station')

    assert.showShowDepartures()
  })
  it('should show departures when the user navigates to /902/1/CNST', () => {
    cy.visit('/902/1/CNST')

    assert.showShowDepartures()
  })
})
