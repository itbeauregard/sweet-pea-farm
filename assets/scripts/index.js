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
  $('#create-account').on('submit', events.onCreateAccount)
  $('#account-login').on('submit', events.onLogin)
  $('#change-password').on('submit', events.onChangePassword)
  $('#account-signout').on('submit', events.onSignOut)

  $('#floral-form').on('submit', events.onCreateQuoteRequest)
  $('#delete-quote').on('submit', events.onDeleteQuoteRequest)
  $('#get-all-requests').on('click', events.onGetAllQuoteRequests)

  $('.csa-form').on('submit', events.onCreateRegistration)

  // Home page hiding
  $('#warning-messages').hide()
  $('#account-login').hide()
  $('#create-account').hide()
  $('#change-password').hide()
  $('#account-signout').hide()
  $('.floral-design-page').hide()
  $('.csa-share-page').hide()
  $('#get-all-requests').hide()
  $('#reveal-buttons').hide()
  $('#account-signout').hide()

  $('#registration-nav').on('click', function () {
    $('.csa-share-page').show()
    $('.text-content').hide()
    $('#warning-messages').hide()
    $('#account-login').hide()
    $('#create-account').hide()
    $('#change-password').hide()
    $('#account-signout').hide()
    $('.floral-design-page').hide()
    $('#get-all-requests').hide()
    $('#reveal-buttons').hide()
  })

  $('#floral-design-nav').on('click', function () {
    $('.floral-design-page').show()
    $('.text-content').hide()
    $('#warning-messages').hide()
    $('#account-login').hide()
    $('#create-account').hide()
    $('#change-password').hide()
    $('#account-signout').hide()
    $('.csa-share-page').hide()
    $('#get-all-requests').hide()
    $('#reveal-buttons').hide()
  })

  $('#sign-in-reveal').on('click', function () {
    $('.text-content').hide()
    $('#account-login').show()
    $('#reveal-buttons').show()
  })
})
