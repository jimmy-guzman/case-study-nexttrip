# NextTrip CaseStudy

This project was generated using [Nx](./NX.md)

## Instructions

Submit a working web application that displays Minneapolis Metro Transit bus line information based on APIs available via Metro Transit NextTrip API. You may use any web frameworks or libraries that you'd like to complete this project. Build a web application that provides functionality similar to the one found at https://www.metrotransit.org/nextripbadge.aspx. The application must provide the following functionality:

- Select a bus route from a list of available routes
- Select a direction for a bus route
- For a given route and direction, display the stops
- Respond reasonably to browser back and forward buttons (for example, implement application routing)
- Include test code that validates your application works as expected. Include a README.md file that includes:
  - The steps to build and run the application
    - `yarn install && yarn start`
      - http://localhost:4200/
    - or if docker is available `docker-compose up`
      - will do a multi stage build (prod build then build ngnix container)
      - http://localhost:8080/
      - _this build will take longer since cache is not being leveraged_
  - The steps to execute provided tests
    - `yarn test` to run unit tests (jest)
    - `yarn test:coverage` to run coverage report and open in browser
    - `yarn e2e next-trip-e2e` to run e2e tests (cypress)
      - `yarn start` should not be running since this command also does the same
  - A list of assumptions you made during development
    - Regarding _Respond reasonably to browser back and forward buttons_
      - I assumed that this meant that the user can navigate through their selections with the browser back and forward buttons
    - ie11 will not be supported
