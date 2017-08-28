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

$(() => {
  // $('.floral-quote').on('submit', events.onSubmitQuote)
  // $('#account-forms').hide()
  $('#create-account').on('submit', events.onCreateAccount)
  $('#account-login').on('submit', events.onLogin)
  $('#change-password').on('submit', events.onChangePassword)
  $('#account-signout').on('submit', events.onSignOut)

  $('#floral-form').on('submit', events.onCreateQuoteRequest)
  $('#delete-quote').on('submit', events.onDeleteQuoteRequest)
})
