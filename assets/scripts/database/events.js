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

module.exports = {
  onLogin,
  onChangePassword,
  onCreateAccount,
  onSignOut
}
