$(document).ready(function() {
    $(".error-input").removeClass("error-input");
  

    $("#sign-up-button").click(function(event) {
        event.preventDefault();
    
    
        var email = $("#input-email").val(); 

        if (email == "") { 
            $("#empty-email-text").show();
            $("#input-email").css("background-color", "hsl(3, 71%, 80%)");
            $("#input-email").css("border-color", "red");
        } else {
            $(".left").hide();
            $(".right").hide()
            $(".container").hide();
            $(".success-message").css("display", "flex");
        }
            
    });


});