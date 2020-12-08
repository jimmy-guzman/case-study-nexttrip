# CaseStudy

This project was generated using [Nx](./NX.md)

1. The steps to build and run the application
   - `yarn install && yarn start`
     - http://localhost:4200/
   - or if docker is available `docker-compose up`
     - will do a multi stage build (prod build then build ngnix container)
     - http://localhost:8080/
     - _this build will take longer since cache is not being leveraged_
2. The steps to execute provided tests
   - `yarn test` to run unit tests (jest)
   - `yarn test:coverage` to run coverage report and open in browser
   - `yarn e2e next-trip-e2e` to run e2e tests (cypress)
     - `yarn start` should not be running since this command also does the same
3. A list of assumptions you made during development
   - Regarding _Respond reasonably to browser back and forward buttons_
     - I assumed that this meant that the user can navigate through their selections with the browser back and forward buttons
   - ie11 will not be supported
