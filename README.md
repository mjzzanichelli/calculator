# Calculator

version number: 5b8d0fd276b6d288905ed2f63a934e057e8feca2

## Requisites

- Internet connection
- Node 10+
- npm 4+

## Installation

The current solution is delivered as an npm package. Run the install command from the base directory to download the dependencies:

```
path/to/source> npm install
```

Proceed with building the test coverage and the app by running the npm script:

```
path/to/source> npm test && npm run build
```

To access the generated resources, open the following files in your browser:

- `public/index.html`
- `coverage/lcov-report/index.html`

## Development

This solution is using Webpak for bundling and Jest to handle tests and coverage. The configurations are found in the following files:

- `webpack.config.js`
- `jest.config.js`

To watch for changes on the app, run the following command

```
path/to/source> npm run start
```

Webpack dev server is now running and is accessible from your browser at `http://localhost:9000`

To watch how tests are affected by the changes, run the following command:

```
path/to/source> npm run test-watch
```

When watching for tests changes, the new coverage files are generated always accessible from `coverage/lcov-report/index.html`

## Note

After compiling the solution with `npm run build`, the entry file for the application `index.html` will be modified to include the script bundle. Any further build or `npm run start` command will duplicate the include of the bundle.
