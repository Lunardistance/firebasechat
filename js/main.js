firebase.auth().onAuthStateChanged(function (user) {
  console.log('user ', user);

  if (user) {
    $('#root').html(ChatScreen(user));
    chatScreenEvents(user);

    window.user = user;
    online(user);
  }
  else {
    $('#root').append(LoginScreen());
    loginScreenEvents();
  }
});
