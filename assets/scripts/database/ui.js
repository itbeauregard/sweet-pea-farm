'use strict'

const app = require('../store.js')

const onLoginSuccess = function (data) {
  app.user = data.user
  console.log('Login Success!')
  console.log(data)
}

const onLoginError = function (response) {
  console.log(response)
}

const onChangePasswordSuccess = function () {
  console.log('You successfully updated the account!')
}

const onChangePasswordError = function (response) {
  console.log(response)
}

const onCreateAccountSuccess = function (data) {
  console.log('Create Account Success!')
  console.log(data)
}

const onCreateAccountError = function (response) {
  console.log(response)
}

const onSignOutSuccess = function () {
  console.log('Sign out successful!')
  app.user = null
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
  onCreateQuoteRequestError
}
