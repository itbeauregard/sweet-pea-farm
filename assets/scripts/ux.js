'use strict'

const homePage = function () {
  $('#account-signout').show()
  $('.text-content').show()
  $('#reveal-change-password').show()

  $('#warning-messages').children().hide()
  $('#account-login').hide()
  $('#create-account').hide()
  $('#change-password').hide()
  $('.floral-design-page').hide()
  $('.csa-share-page').hide()
  $('#reveal-new-account').hide()
}

const signInPage = function () {
  $('#account-login').show()
  $('#reveal-buttons').children().show()

  $('#get-all-buttons').children().hide()
  $('.text-content').hide()
  $('#reveal-change-password').hide()
  $('.floral-design-page').hide()
  $('.csa-share-page').hide()
}

module.exports = {
  homePage,
  signInPage
}
