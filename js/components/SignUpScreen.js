const SignUpScreen = () => {
  let container = document.createElement('div');

  $(container).html(`
    <div id="signup_screen" class="signup-container">
      <span id="back_to_login" class="ion-ios-arrow-back back-icon"></span>

      <div class="logo-container">
        <span class="ion-ios-chatboxes icon"></span>
      </div> 

      <div class="inputs-container">
        <div class="input-container">
          <div class="input-title">Email:</div>
          <div class="input-wrapper">
            <input id="email" class="input" type="text" />
          </div>
        </div>

        <div class="input-container">
          <div class="input-title">Password:</div>
          <div class="input-wrapper">
            <input id="password" class="input" type="password" />
          </div>
        </div>

      </div>
      
      <div class="btn-container">
        <div id="create_btn" class="btn accent-color-1">
          CREATE
        </div>
      </div>
    </div>
  `);

  return container;
}

function signUpScreenEvents() {

  $('#root').on('click', '#back_to_login', function(){
    $('#signup_screen').fadeOut("slow", function () {
      $('#root').html(LoginScreen());
      loginScreenEvents();
    });
  });

  $('#root').on('click', '#create_btn', function(){
    let email = $('#email').val();
    let password = $('#password').val();

    if (validateEmail(email) && validatePassword(password)){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        $('#signup_screen').fadeOut("slow", function () {
          $('#root').html(LoginScreen());
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        alert(errorMessage);
      });
    }
    else {
      alert('Please insert valid email and password');
    }
  });
}