const LoginScreen = () => {
  let container = document.createElement('div');

  $(container).html(`
    <div id="login_screen" class="login-container">
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

        <div class="icons-container">
          <div id="google_icon" class="google-icon icon-hover"></div>
          <div id="facebook_icon" class="facebook-icon icon-hover"></div>
        </div>
      </div>
      
      <div class="btn-container">
        <div id="signup_btn" class="btn accent-color-2">SIGN UP</div>
        <div id="signin_btn" class="btn accent-color-1">SIGN IN</div>
      </div>
    </div>
  `);

  return container;
}

function loginScreenEvents() {
  $('#root').on('click', '#google_icon', 
  () => sessionPersistance(googleLogin));

  $('#root').on('click', '#facebook_icon', 
  () => sessionPersistance(facebookLogin));

  $('#root').on('click', '#signin_btn', 
  () => sessionPersistance(emailPasswordLogin));

  $('#root').on('click', '#signup_btn', function(){
    $('#login_screen').fadeOut("slow", function () {
      $('#root').html(SignUpScreen());
      signUpScreenEvents();
    });
  });
}