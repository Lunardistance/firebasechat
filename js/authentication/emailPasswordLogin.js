function emailPasswordLogin() {
  let email = $('#email').val();
  let password = $('#password').val();

  if (validateEmail(email) && validatePassword(password)) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (result) {
        
        var user = result;

        console.log('user ', user);

        window.user = user;

        $('#login_screen').fadeOut("slow", function () {
          $('#root').html(ChatScreen(user));
          chatScreenEvents(user);
          online(user);
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        // console.log('error message ', errorMessage);

        alert(errorMessage);
      });
  }
  else {
    alert('Please insert valid email and password');
  }
}