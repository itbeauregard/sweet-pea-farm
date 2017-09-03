'use strict'

const app = require('../store.js')

const loginAccount = function (data) {
  return $.ajax({
    url: app.host + '/sign-in',
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
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password,
        'first_name': data.credentials.first_name,
        'last_name': data.credentials.last_name,
        'is_admin': false
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
  return $.ajax({
    url: app.host + '/quote_requests',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
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

// TODO: find out whether this is grabbing the item's id
const deleteQuoteRequest = function (id) {
  return $.ajax({
    url: app.host + '/quote_requests/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// TODO: find out whether this is grabbing the item's id
const updateQuoteRequest = function (data) {
  return $.ajax({
    url: app.host + '/quote_requests/' + data.fields.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
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

const getQuoteRequest = function (data) {
  return $.ajax({
    url: app.host + '/quote_requests/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getAllQuoteRequests = function (data) {
  return $.ajax({
    url: app.host + '/quote_requests',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createRegistration = function (data) {
  return $.ajax({
    url: app.host + '/registrations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'fields': {
        'email': data.fields.email,
        'phone': data.fields.phone,
        'veg_csa': data.fields.veg_csa,
        'flower_csa': data.fields.flower_csa,
        'location': data.fields.location,
        'user_id': app.user.id
      }
    }
  })
}

const deleteRegistration = function (id) {
  return $.ajax({
    url: app.host + '/registrations/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateRegistration = function (data) {
  return $.ajax({
    url: app.host + '/registrations/' + data.fields.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'fields': {
        'email': data.fields.email,
        'phone': data.fields.phone,
        'veg_csa': data.fields.veg_csa,
        'flower_csa': data.fields.flower_csa,
        'location': data.fields.location,
        'user_id': app.user.id
      }
    }
  })
}

const getRegistration = function (data) {
  return $.ajax({
    url: app.host + '/registrations/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getAllRegistrations = function (data) {
  return $.ajax({
    url: app.host + '/registrations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  loginAccount,
  changePassword,
  createAccount,
  signOut,
  createQuoteRequest,
  deleteQuoteRequest,
  updateQuoteRequest,
  getQuoteRequest,
  getAllQuoteRequests,
  createRegistration,
  deleteRegistration,
  updateRegistration,
  getRegistration,
  getAllRegistrations
}
