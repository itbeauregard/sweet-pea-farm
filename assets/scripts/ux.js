'use strict'

const homePage = function () {
  $('#warning-messages').hide()
  $('#account-login').hide()
  $('#create-account').hide()
  $('#change-password').hide()
  $('#account-signout').hide()
  $('.floral-design-page').hide()
  $('.csa-share-page').hide()
  $('#get-all-buttons').hide()
  $('#reveal-new-account').hide()
  $('#reveal-change-password').hide()
  $('.text-content').show()
}

module.exports = {
  homePage
}
