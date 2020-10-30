

  var emailSuccess = false, messageSuccess = false;
  var adminLinks , hallsLink , userLink ;
  var $elements = $("input, textarea");
  $elements.on("focus", function() {
    var $selected = $(this);
    $elements.each(function() {
      var $this = $(this);
      if($this !== $selected)
        $(this).parent().css("opacity", 0.5);
    });
    $selected.parent().css("opacity", 1);
  });
  
  
  $("#contact-email").on("blur", validateEmail);
  $("#contact-message").on("blur", validateMessage);
  
  $("#contact-send").on("click", function() {
    validateEmail();
    validateMessage();
    
    if( emailSuccess && messageSuccess) {
      $(".form").slideUp();
        $(".p").show();
        
    }
    else if(!emailSuccess) $("#contact-email").focus();
    else if(!messageSuccess) $("#contact-message").focus();
  });

function validateName(){
  var $name = $("#contact-name");
    var text = $name.val().trim();
    if(text.length < 2) {
      $name.parent().removeClass("has-success").addClass("has-error");
      nameSuccess = false;
    }
    else{
      $name.parent().removeClass("has-error").addClass("has-success");
      nameSuccess = true;
    }
}
  
  function validateEmail(){
    var $email = $("#contact-email");
    var text = $email.val().trim();
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    var match = pattern.test(text);
    if(match) {
      $email.parent().removeClass("has-error").addClass("has-success");
      emailSuccess = true;
    }
    else{
      $email.parent().removeClass("has-success").addClass("has-error");
      emailSuccess = false;
    }
  }
  
  function validateMessage(){
    var $message = $("#contact-message");
    var text = $message.val().trim();
    
    if(text.length > 1) {
      $message.parent().removeClass("has-error").addClass("has-success");
      messageSuccess = true;
    }
    else {
      $message.parent().removeClass("has-success").addClass("has-error");
      messageSuccess = false;
    }
  }

// veru
 $(document).ready(function(){
        $(".text-success").hide().html();
        $(".text-danger").hide().html();
        $(".text-info").hide().html();

    });

function signIn(){
    document.getElementById("show").style.display = "block";
            var userEmail=$("#name").val();
            var password=$("#pass").val();
            let requestBody = {
                userEmail : userEmail,
                userPassword : password
            }

            
            const xhttp = new XMLHttpRequest();

            xhttp.open("POST",  "https://hidden-ocean-87285.herokuapp.com/users/signin", true);
            xhttp.setRequestHeader("Content-Type", "application/json");
    
    xhttp.onload  = function() {
                if (this.readyState == 4 && this.status == 200) {   
                    
                }else{
                    document.getElementById("show").style.display = "none";
                    alert("Username or Password not correct");
                }
            
   var jsonResponse = JSON.parse(xhttp.responseText);
  
        localStorage.setItem("token" , jsonResponse.user.token);
        localStorage.setItem("User" , jsonResponse.user.userName);
        localStorage.setItem("sideNavActions" , JSON.stringify(jsonResponse.user.userRole.sideNavActions));
        localStorage.setItem("role" , JSON.stringify(jsonResponse.user.userRole.role));

          window.location.href = 'admin.html'

};
            xhttp.send(JSON.stringify(requestBody));
                
}















