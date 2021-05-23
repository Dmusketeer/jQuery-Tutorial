// jQuery Effects - Fading
// With jQuery you can fade elements in and out of visibility.
// jQuery has the following fade methods:

// fadeIn()
// fadeOut()
// fadeToggle()
// fadeTo()

// jQuery fadeIn() Method
// The jQuery fadeIn() method is used to fade in a hidden element.
//     Syntax:
//     $(selector).fadeIn(speed, callback);

$(document).ready(function (){
    $("#fadeIn").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

// jQuery fadeOut() Method

// The jQuery fadeOut() method is used to fade out a visible element.
//     Syntax:
    // $(selector).fadeOut(speed, callback);


$(document).ready(function () {
    $("#fadeIn").click(function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
});

// jQuery Effects - Sliding
// The jQuery slide methods slide elements up and down.

// jQuery Sliding Methods
// With jQuery you can create a sliding effect on elements.
// jQuery has the following slide methods:
// slideDown()
// slideUp()
// slideToggle()


// jQuery slideDown() Method
// The jQuery slideDown() method is used to slide down an element.
//     Syntax:
// $(selector).slideDown(speed, callback);

$(document).ready(function () {
    $("#flip").click(function(){
        // $("#panel").slideUp(2000);
        // $("#panel").slideDown(2000);
        $("#panel").slideToggle();
    });
});






















































