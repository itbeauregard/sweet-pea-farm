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
  $('#get-all-requests').on('click', events.onGetAllQuoteRequests)
  $(document).on('click', '.delete-quote', events.onDeleteQuoteRequest)

  $('.csa-form').on('submit', events.onCreateRegistration)
  $('#get-all-registrations').on('click', events.onGetAllRegistrations)
  $(document).on('click', '.delete-registration', events.onDeleteRegistration)
  $(document).on('submit', '#update-registration', events.onUpdateRegistration)

  // Home page hiding
  $('#warning-messages').hide()
  $('#account-login').hide()
  $('#create-account').hide()
  $('#change-password').hide()
  $('#account-signout').hide()
  $('.floral-design-page').hide()
  $('.csa-share-page').hide()
  $('#get-all-buttons').hide()
  $('#reveal-buttons').hide()

  // Navigate to Home page
  $('#home-nav').on('click', function () {
    $('.text-content').show()
    $('#warning-messages').hide()
    $('#account-login').hide()
    $('#create-account').hide()
    $('#change-password').hide()
    $('.floral-design-page').hide()
    $('.csa-share-page').hide()
    $('#get-all-buttons').hide()
    $('#reveal-buttons').hide()
  })

  // Navigate to CSA registration page
  $('#registration-nav').on('click', function () {
    $('.csa-share-page').show()
    $('.text-content').hide()
    $('#warning-messages').hide()
    $('#account-login').hide()
    $('#create-account').hide()
    $('#change-password').hide()
    $('#account-signout').hide()
    $('.floral-design-page').hide()
    $('#get-all-buttons').hide()
    $('#reveal-buttons').hide()
    $('#table-holder').empty()
  })

  // Navigate to floral design page
  $('#floral-design-nav').on('click', function () {
    $('.floral-design-page').show()
    $('.text-content').hide()
    $('#warning-messages').hide()
    $('#account-login').hide()
    $('#create-account').hide()
    $('#change-password').hide()
    $('#account-signout').hide()
    $('.csa-share-page').hide()
    $('#get-all-buttons').hide()
    $('#reveal-buttons').hide()
    $('#table-holder').empty()
  })

  // Navigate to Sign In page
  $('#sign-in-reveal').on('click', function () {
    $('#account-login').show()
    $('#reveal-buttons').show()
    $('#get-all-buttons').hide()
    $('.text-content').hide()
    $('#reveal-change-password').hide()
  })

  // Navigate to Change Password page
  $('#reveal-change-password').on('click', function () {
    $('#change-password').show()
    $('#account-login').hide()
    $('#reveal-buttons').hide()
    $('#get-all-buttons').hide()
    $('.text-content').hide()
    $('.csa-share-page').hide()
    $('.floral-design-page').hide()
  })

  // Navigate to Create Account page
  $('#reveal-new-account').on('click', function () {
    $('#create-account').show()
    $('#account-login').hide()
    $('#reveal-buttons').hide()
    $('#sign-in-reveal').hide()
  })
})
