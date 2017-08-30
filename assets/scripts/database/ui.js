'use strict'

const app = require('../store.js')
const ux = require('../ux.js')

const onLoginSuccess = function (data) {
  app.user = data.user
  console.log('Login Success!')
  console.log(data)
  $(() => {
    $('#get-all-buttons').show()
    $('#account-signout').show()
    $('#reveal-change-password').show()
    $('.text-content').show()

    $('#sign-in-reveal').hide()
    $('#warning-messages').hide()
    $('#account-login').hide()
    $('#create-account').hide()
    $('#change-password').hide()
    $('#account-signout').hide()
    $('.floral-design-page').hide()
    $('.csa-share-page').hide()
    $('#reveal-new-account').hide()
  })
}

const onLoginError = function (response) {
  console.log(response)
  $('#login-error').show()
}

const onChangePasswordSuccess = function () {
  console.log('You successfully updated the account!')
  $(() => {
    $('#reveal-change-password').show()
    $('#account-signout').show()
    $('#get-all-buttons').show()
    $('.text-content').show()

    $('#change-password').hide()
  })
}

const onChangePasswordError = function (response) {
  console.log(response)
}

const onCreateAccountSuccess = function (data) {
  console.log('Create Account Success!')
  console.log(data)
  $(() => {
    $('#account-login').show()
    $('#reveal-buttons').show()
    $('#get-all-buttons').hide()
    $('.text-content').hide()
    $('#create-account').hide()
  })
}

const onCreateAccountError = function (response) {
  console.log(response)
}

const onSignOutSuccess = function () {
  console.log('Sign out successful!')
  app.user = null
  ux.homePage()
  $('#sign-in-reveal').show()
  $('#account-signout').hide()
}

const onSignOutError = function (response) {
  console.log(response)
}

const onCreateQuoteRequestSuccess = function (data) {
  console.log('passing quote request through ui.js')
  console.log(data)
}

const onCreateQuoteRequestError = function (response) {
  console.log(response)
}

const onDeleteQuoteRequestSuccess = function (id) {
  console.log('passing through delete QR in ui.js')
  $('.' + id).remove()
}

const onDeleteQuoteRequestError = function (response) {
  console.log(response)
}

const onUpdateQuoteRequestSuccess = function (data) {
  console.log('passing through update QR in ui.js')
  console.log(data)
  const id = data.fields.id
  $(() => {
    $('.' + id).remove()
    $('#append-quote-here').append(
      "<tr><td>" + id + "</td><td>" + data.fields.email + "</td><td>" + data.fields.phone + "</td><td>" + data.fields.event_type + "</td><td>" + data.fields.event_date + "</td><td>" + data.fields.color_scheme + "</td><td>" + data.fields.description + "</td><td><a class='button is-dark delete-quote' data-id=" + id + ">Delete</a></td></tr>"
    )
  })
}

const onUpdateQuoteRequestError = function (response) {
  console.log(response)
}

const onGetQuoteRequestSuccess = function (data) {
  console.log('passing through getQR in ui.js')
}

const onGetQuoteRequestError = function (response) {
  console.log(response)
}

const onGetAllQuoteRequestsSuccess = function (data) {
  console.log('passing through getAllQR in ui.js')
  console.log(data)
  $(() => {
    // Hide home page
    $('.text-content').hide()
    $('#get-all-requests').hide()
  })
  drawQuoteRequestTable(data)
}

const drawQuoteRequestTable = function (data) {
  $(() => {
    // Grab the template script
    const theTemplateScript = $('#quote-request-template').html()
    // Compile the template
    const theTemplate = Handlebars.compile(theTemplateScript)
    // Define our data object
    const context = {
      fields: data
    }
    // Pass our data to the template
    const theCompiledHtml = theTemplate(context)
    // Add the compiled html to the page
    $('#table-holder').prepend(theCompiledHtml)
  })
}

const onGetAllQuoteRequestsError = function (response) {
  console.log(response)
}

const onCreateRegistrationSuccess = function (data) {
  console.log('passing through createReg in ui.js')
  ux.homePage()
}

const onCreateRegistrationError = function (response) {
  console.log(response)
}

const onDeleteRegistrationSuccess = function (id) {
  console.log('passing through deleteReg in ui.js')
  $('.' + id).remove()
}

const onDeleteRegistrationError = function (response) {
  console.log(response)
}

const onUpdateRegistrationSuccess = function (data) {
  console.log('passing through updateReg in ui.js')
  console.log(data)
  const id = data.fields.id
  $(() => {
    $('.' + id).remove()
    $('#append-reg-here').append(
      "<tr><td>" + data.fields.id + "</td><td>" + data.fields.email + "</td><td>" + data.fields.phone + "</td><td>" + data.fields.veg_csa + "</td><td>" + data.fields.flower_csa + "</td><td>" + data.fields.location + "</td><td><a class='button is-dark delete-registration' data-id=" + id + ">Delete</a></td></tr>"
    )
  })
}

const onUpdateRegistrationError = function (response) {
  console.log(response)
}

const onGetRegistrationSuccess = function (data) {
  console.log('passing through getReg in ui.js')
}

const onGetRegistrationError = function (response) {
  console.log(response)
}

const onGetAllRegistrationsSuccess = function (data) {
  console.log('passing through getAllReg in ui.js')
  console.log(data)
  $(() => {
    // Hide home page
    $('.text-content').hide()
    $('#get-all-registrations').hide()
    // Grab the template script
    const theTemplateScript = $('#registration-template').html()
    // Compile the template
    const theTemplate = Handlebars.compile(theTemplateScript)
    // Define our data object
    const context = {
      fields: data
    }
    // Pass our data to the template
    const theCompiledHtml = theTemplate(context)
    // Add the compiled html to the page
    $('#table-holder').prepend(theCompiledHtml)
  })
}

const onGetAllRegistrationsError = function (response) {
  console.log(response)
}

module.exports = {
  onLoginSuccess,
  onLoginError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onCreateAccountSuccess,
  onCreateAccountError,
  onSignOutSuccess,
  onSignOutError,
  onCreateQuoteRequestSuccess,
  onCreateQuoteRequestError,
  onDeleteQuoteRequestSuccess,
  onDeleteQuoteRequestError,
  onUpdateQuoteRequestSuccess,
  onUpdateQuoteRequestError,
  onGetQuoteRequestSuccess,
  onGetQuoteRequestError,
  onGetAllQuoteRequestsSuccess,
  onGetAllQuoteRequestsError,
  drawQuoteRequestTable,
  onCreateRegistrationSuccess,
  onCreateRegistrationError,
  onDeleteRegistrationSuccess,
  onDeleteRegistrationError,
  onUpdateRegistrationSuccess,
  onUpdateRegistrationError,
  onGetRegistrationSuccess,
  onGetRegistrationError,
  onGetAllRegistrationsSuccess,
  onGetAllRegistrationsError
}
