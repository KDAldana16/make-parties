
// Render the "home" layout for the main page and send the following message
app.get('/', (reg, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
})

// Initialize express
const express = require('express')
const app = express()

// Tell our app to send the "hello world" message to our home page
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})

// require handlebars
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }));

// Use handlebars to render
app.set('view engine', 'handlebars');