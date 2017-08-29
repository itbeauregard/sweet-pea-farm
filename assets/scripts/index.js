'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const events = require('./database/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
require('handlebars')

$(() => {
  // $('.floral-quote').on('submit', events.onSubmitQuote)
  // $('#account-forms').hide()
  $('#create-account').on('submit', events.onCreateAccount)
  $('#account-login').on('submit', events.onLogin)
  $('#change-password').on('submit', events.onChangePassword)
  $('#account-signout').on('submit', events.onSignOut)

  $('#floral-form').on('submit', events.onCreateQuoteRequest)
  $('#delete-quote').on('submit', events.onDeleteQuoteRequest)

  $('#warning-messages').hide()

  $('#account-forms').hide()

  // Grab the template script
  const theTemplateScript = $('#quote-request-template').html()
  console.log(theTemplateScript)
  // Compile the template
  const theTemplate = Handlebars.compile(theTemplateScript)

  // Define our data object
  const context = {
    fields: [{
        email: 'irene@beau.com',
        phone: '4011230000',
        event_type: 'wedding',
        event_date: '01-02-2020',
        color_scheme: 'purple',
        description: 'Stuff n things'
      },
      {
        email: 'irene@poop.com',
        phone: '4011230000',
        event_type: 'wedding',
        event_date: '01-02-2020',
        color_scheme: 'purple',
        description: 'Stuff n things'
      }
    ]
  }

  // Pass our data to the template
  const theCompiledHtml = theTemplate(context)

  // Add the compiled html to the page
  $(document.body).append(theCompiledHtml)
})
