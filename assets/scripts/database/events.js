'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onLogin = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.loginAccount(data)
    .then(ui.onLoginSuccess)
    .catch(ui.onLoginError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this is the form input { book: { 'author': ..., }}
  // {id: ..., 'author': ..., 'title': ...}
  api.changePassword(data) // returns a JQXhr object ($.ajax({}))
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordError)
}

const onCreateAccount = function (event) {
  // Prevents page refresh
  event.preventDefault()
  const data = getFormFields(this)
  // Test that the passwords match
  console.log('passing through events.js')
  console.log(data)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    ui.onCreateAccountError("passwords don't match")
  } else {
    api.createAccount(data)
      .then(ui.onCreateAccountSuccess)
      .catch(ui.onCreateAccountError)
  }
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onCreateQuoteRequest = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('passing quote request through events.js')
  api.createQuoteRequest(data)
    .then(ui.onCreateQuoteRequestSuccess)
    .catch(ui.onCreateQuoteRequestError)
}

// TODO: find out if I need to pass data through this
// TODO: how do I connect this to a specific quote request?
const onDeleteQuoteRequest = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('passing delete quote through events.js')
  api.deleteQuoteRequest(data)
    .then(ui.onDeleteQuoteRequestSuccess)
    .catch(ui.onDeleteQuoteRequestError)
}

const onUpdateQuoteRequest = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('passing Update QR events.js')
  api.updateQuoteRequest(data)
    .then(ui.onUpdateQuoteRequestSuccess)
    .catch(ui.onUpdateQuoteRequestError)
}

const onGetQuoteRequest = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('passing Get QR events.js')
  api.getQuoteRequest(data)
    .then(ui.onGetQuoteRequestSuccess)
    .catch(ui.onGetQuoteRequestError)
}

const onGetAllQuoteRequests = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('passing GetAllQR events.js')
  api.getAllQuoteRequests(data)
    .then(ui.onGetAllQuoteRequestsSuccess)
    .catch(ui.onGetAllQuoteRequestsError)
}

module.exports = {
  onLogin,
  onChangePassword,
  onCreateAccount,
  onSignOut,
  onCreateQuoteRequest,
  onDeleteQuoteRequest,
  onUpdateQuoteRequest,
  onGetQuoteRequest,
  onGetAllQuoteRequests
}
