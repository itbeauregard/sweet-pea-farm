'use strict'

const homePage = function () {
  $('#account-signout').show()
  $('.text-content').show()
  $('#get-all-requests').show()
  $('#get-all-registrations').show()
  $('#reveal-change-password').show()

  $('#warning-messages').children().hide()
  $('#account-login').hide()
  $('#create-account').hide()
  $('#change-password').hide()
  $('.floral-design-page').hide()
  $('.csa-share-page').hide()
  $('#reveal-new-account').hide()
}

module.exports = {
  homePage
}
