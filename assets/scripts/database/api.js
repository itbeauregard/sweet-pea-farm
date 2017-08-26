'use strict'

const app = require('../store.js')

const loginAccount = function (data) {
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const createAccount = function (data) {
  console.log('passing through api.js')
  console.log('app.host ' + app.host)
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password,
        'first_name': data.credentials.first_name,
        'last_name': data.credentials.last_name
      }
    }
  })
}

const signOut = function () {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createQuoteRequest = function (data) {
  console.log('passing quote request through api.js')
  console.log(data)
  console.log(app.user.id)
  return $.ajax({
    url: app.host + '/quote_requests',
    method: 'POST',
    data: {
      'fields': {
        'email': data.fields.email,
        'phone': data.fields.phone,
        'event_type': data.fields.event_type,
        'event_date': data.fields.event_date,
        'color_scheme': data.fields.color_scheme,
        'description': data.fields.description,
        'user_id': app.user.id
      }
    }
  })
}

module.exports = {
  loginAccount,
  changePassword,
  createAccount,
  signOut,
  createQuoteRequest
}
