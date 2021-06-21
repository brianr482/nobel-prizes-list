#  Nobel Prizes List React App - [live demo](https://nobel-prizes-list.vercel.app/)
Responsive web app that lists the Nobel Prizes awarded between 2015 and 2017. This project was built with React.js, Create React App, and Emotion. Deployed with Vercel.

## How to run the app
First, you need to create a `.env` file in the root of the project based on the `.env.development` file.
Set the corresponding values for the environment variables.
Then, run the following command `yarn start`. It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to run tests
- Run the following command `yarn test` to launch the test runner in the interactive watch mode.
- Run the following command `yarn test:coverage` to run the test cases and generate the coverage report.

## How to build
Run the following command `yarn build`. It builds the app for production to the `build` folder.

## Project structure
Components are decoupled into two files. One for the component logic and the other one for the styles (Any styled component required for the component).
### `Pages`
Contains every page in the app. A page is a wrapper of a main section. For this particular case, there is only one page which is the `Home` and therefore, there is no need to create a routing file. This folder makes it easier to link every page or any main section of the app with the corresponding routes.

Any page can contain components linked to its functionality inside.

### `Layouts`
Contains every layout needed in the app. A layout is a skeleton for a particular or multiple sections in the app.

### `Components`
Contains UI sharable components. These components can be used in any part of the app as their logic is not linked to a particular process.

### `Styles`
Contains the style settings for the app. This provides some global styles through Emotion and constants related to the look and feel of the app.

### `Utils`
Contains utils functions for the app. These functions can be used in any part of the app and encourage the use of the DRY principle.

**Note**: The API logic was decoupled from the components and placed in this folder.

### `Assets`
Contains assets for the app.

### `__tests__`
Contains the test cases and the fixtures needed for testing. There are tests for components flow
and for the utils methods.

## Notes/TODO
### Caching requests
It would be useful to wrap the HTTP requests logic into a caching system to fall back when API is unavailable and to decrease the waiting time when the app needs to make a request. This can be handled with [SWR](https://github.com/vercel/swr).

### Virtual scroll
Since the app is not paginating the data, it would be expensive to render the items of the Nobel Prize list for those cases where there may be a very large number of Prizes. Therefore, it will be very useful 
to implement virtual scrolling for the Nobel Prizes list, so that only the elements in the users's visible range will be rendered in the DOM.
