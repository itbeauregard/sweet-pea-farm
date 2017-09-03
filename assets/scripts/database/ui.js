'use strict'

const app = require('../store.js')
const ux = require('../ux.js')

const onLoginSuccess = function (data) {
  app.user = data.user
  $(() => {
    if (app.user.is_admin === true) {
      $('#get-all-buttons').children().show()
    }
    $('#account-signout').show()
    $('#reveal-change-password').show()
    $('.text-content').show()

    $('#sign-in-reveal').hide()
    $('#warning-messages').children().hide()
    $('#account-login').hide()
    $('#create-account').hide()
    $('#change-password').hide()
    $('.floral-design-page').hide()
    $('.csa-share-page').hide()
    $('#reveal-new-account').hide()
  })
}

const onLoginError = function (response) {
  $('#login-error').show()
}

const onChangePasswordSuccess = function () {
  $(() => {
    if (app.user.is_admin === true) {
      $('#get-all-buttons').children().show()
    }
    $('#reveal-change-password').show()
    $('#account-signout').show()
    $('.text-content').show()
    $('#password-success').show()

    $('#change-password').hide()
    $('#password-error').hide()
  })
}

const onChangePasswordError = function (response) {
  $('#password-error').show()
}

const onCreateAccountSuccess = function (data) {
  $(() => {
    $('#account-login').show()
    $('#reveal-buttons').children().show()
    $('#create-account-success').show()

    $('#get-all-buttons').children().hide()
    $('.text-content').hide()
    $('#create-account').hide()
    $('#create-account-error').hide()
    $('#password-match-error').hide()
  })
}

const onPasswordMatchError = function () {
  $('#password-match-error').show()

  $('#create-account-error').hide()
}

const onCreateAccountError = function (response) {
  $('#create-account-error').show()

  $('#password-match-error').hide()
}

const onSignOutSuccess = function () {
  app.user = null
  $(() => {
    ux.homePage()
    $('#sign-in-reveal').show()
    $('#account-signout').hide()
    $('#table-holder').empty()
    $('#get-all-buttons').children().hide()
    $('#reveal-change-password').hide()
  })
}

const onSignOutError = function (response) {
}

const onCreateQuoteRequestSuccess = function (data) {
  $(() => {
    ux.homePage()
    $('#create-quote-success').show()
    $('#floral-form')[0].reset()
  })
}

const onCreateQuoteRequestError = function (response) {
}

const onDeleteQuoteRequestSuccess = function (id) {
  $('.' + id).remove()
}

const onDeleteQuoteRequestError = function (response) {
}

const onUpdateQuoteRequestSuccess = function (data) {
  const id = data.fields.id
  $(() => {
    $('.' + id).remove()
    $('#append-quote-here').append(
      "<tr class=" + id + "><td>" + id + "</td><td>" + data.fields.email + "</td><td>" + data.fields.phone + "</td><td>" + data.fields.event_type + "</td><td>" + data.fields.event_date + "</td><td>" + data.fields.color_scheme + "</td><td>" + data.fields.description + "</td><td><a class='button is-dark delete-quote' data-id=" + id + ">Delete</a></td></tr>"
    )
    $('#update-quote-form')[0].reset()
  })
}

const onUpdateQuoteRequestError = function (response) {
}

const onGetQuoteRequestSuccess = function (data) {
}

const onGetQuoteRequestError = function (response) {
}

const onGetAllQuoteRequestsSuccess = function (data) {
  $(() => {
    // Hide home page
    $('.text-content').hide()
    $('#get-all-requests').hide()
    $('#warning-messages').children().hide()

    $('#get-all-registrations').show()
    // Empty table holder div in case something else is in there
    $('#table-holder').empty()
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
}

const onCreateRegistrationSuccess = function (data) {
  $(() => {
    ux.homePage()
    $('#create-registration-success').show()
    $('.csa-form')[0].reset()
  })
}

const onCreateRegistrationError = function (response) {
}

const onDeleteRegistrationSuccess = function (id) {
  $('.' + id).remove()
}

const onDeleteRegistrationError = function (response) {
}

const onUpdateRegistrationSuccess = function (data) {
  const id = data.fields.id
  $(() => {
    $('.' + id).remove()
    $('#append-reg-here').append(
      "<tr class=" + id + "><td>" + id + "</td><td>" + data.fields.email + "</td><td>" + data.fields.phone + "</td><td>" + data.fields.veg_csa + "</td><td>" + data.fields.flower_csa + "</td><td>" + data.fields.location + "</td><td><a class='button is-dark delete-registration' data-id=" + id + ">Delete</a></td></tr>"
    )
  })
  $('#update-registration')[0].reset()
}

const onUpdateRegistrationError = function (response) {
}

const onGetRegistrationSuccess = function (data) {
}

const onGetRegistrationError = function (response) {
}

const onGetAllRegistrationsSuccess = function (data) {
  $(() => {
    // Hide home page
    $('.text-content').hide()
    $('#get-all-registrations').hide()
    $('#warning-messages').children().hide()

    $('#get-all-requests').show()
    // Empty table holder div in case something else is in there
    $('#table-holder').empty()
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
}

const onSignInPlease = function (response) {
  $(() => {
    ux.signInPage()
    $('#sign-in-please').show()
  })
}

module.exports = {
  onLoginSuccess,
  onLoginError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onCreateAccountSuccess,
  onCreateAccountError,
  onPasswordMatchError,
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
  onGetAllRegistrationsError,
  onSignInPlease
}
