// set the correct username and password combination below
var correctUsername = "socialclubstudent";
var correctPassword = "student365";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
    if (username===correctUsername && password===correctPassword){
    $(".message").text("correct");
    }else{$(".message").text("incorrect");
    }
});