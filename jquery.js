$(document).ready(function(){

    $("#btnlogin").click(function(){
        if($("#username").val()=="admin" && $("#password").val()=="12345")
        {
            alert("ok");
            $("#login-form").attr("action","home.html");
        }
        else{
                alert("User name/Password is wrong");
        }
    });
    

});