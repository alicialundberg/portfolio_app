
$('.submit').click(function (event) {
  console.log('Clicked submit-button')

  var name = $('.name').val()
  var email = $('.email').val()
  var message = $('.message').val()
  var status = $('.status')
  status.empty();

  /* Check length of name, minimum 2 characters */
  if(name.length > 2) {
    status.append('<p>Name is valid</p>')
  } else {
    event.preventDefault()
    status.append('<p>Name is not valid, try again')
  }

  /* Check email length and the adress contains @-symbol, minimum length 5 characters */
  if(email.length > 5 && email.includes('@')) {
    status.append('<p>Email is valid</p>')
  } else {
    event.preventDefault()
    status.append('<p>Email not valid, try again</p>')
  }

  /* Check message length, minimum 10 characters */
  if(message.length > 10) {
    status.append('<p>Message is valid</p>')
  } else {
    event.preventDefault()
    status.append('<p>Message is not valid, try again')
  }
})
