# CurrencyMaster

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/shimulH/currency-master)

- Demo - https://currency-master.netlify.com/

CurrencyMaster is a cloud-based currency converter, it can convert currencies into 32 world currencies. Visitors can also see their recent conversions with date and time included.

## Process!

- React - Used Pure-React (without Redux/ContextAPI) for creating UI and DOM manipulation. Used just One State-full/Class-based Component for state management and others are pure functions.
- Promises - Managing API and asynchronous calls.
- Bootstrap - Its fast, easy to manage and easy to setup.
- FontAwesome - for icons.
- Google Fonts - for fonts.
- Chrome-Developer-tools - for testing and managing.

### Tech

CurrencyMaster uses a number of open source projects to work properly:

- [ReactJS](https://reactjs.org/) - HTML enhanced for web apps!
- [Bootstrap4](https://getbootstrap.com/) - great UI boilerplate for modern web apps
- [Netlify](https://www.netlify.com/) - Deploy the app online.
- [OpenRates](https://openrates.io/) - OpenRates delivers accurate and up-to-date exchange rate data for 32 world currencies in JSON format. All currency data is sourced from the European Central Bank and updated daily at around 4:00pm CET.

### Installation

CurrencyMaster requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd currency-master
$ npm install
$ npm start
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started), [ReactJS](https://reactjs.org/), [Bootstrap4](https://getbootstrap.com/), [Netlify](https://www.netlify.com/).

### Todos/Limitations

- Better 3rd party API with more conversion options
- Backend for better history management
- Polishing and fine tuning UI and UX.
- Write Tests
- Include Share options to let user share their current conversions by email and other social media.

## License

[MIT](https://choosealicense.com/licenses/mit/)
