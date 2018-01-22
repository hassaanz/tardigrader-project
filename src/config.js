require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Tardigrader Application',
    description: 'Planspiel Project by Team Tardigrader',
    head: {
      titleTemplate: 'Tardigrader: %s',
      meta: [
        {name: 'description', content: 'Planspiel Project by Team Tardigrader.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Tardigrader'},
        {property: 'og:image', content: 'http://www.tardigrader.com/public/images/tardigraderLogo.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Tardigrader Project'},
        {property: 'og:description', content: 'Planspiel Project by Team Tardigrader.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@erikras'},
        {property: 'og:creator', content: '@erikras'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
