export const getAppTitle = () => cy.findByText('NextTrip')
export const getPageTitle = () => cy.findByText('Real-time Departures')
export const getSelectRouteInput = () => cy.findByLabelText('Select Route')

export const selectors = {
  get routeInput() {
    return cy.findByLabelText('Select Route')
  },
  get directionInput() {
    return cy.findByLabelText('Select Direction')
  },
  get stopsInput() {
    return cy.findByLabelText('Select Stops')
  },
  get departures() {
    return cy.findByTestId('departures-box')
  },
}

export const actions = {
  selectRoute: (route: string) => {
    selectors.routeInput.click()
    cy.findByText(route).click()
  },
  selectDirection: (direction: string) => {
    selectors.directionInput.click()
    cy.findByText(direction).click()
  },
  selectStops: (stops: string) => {
    selectors.stopsInput.click()
    cy.findByText(stops).click()
  },
}

export const assert = {
  showShowDepartures: () => {
    selectors.departures.should('be.visible')
  },
}
