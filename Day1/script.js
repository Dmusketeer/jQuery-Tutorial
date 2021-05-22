// jQuery Syntax
// The jQuery syntax is tailor - made for selecting HTML elements and performing some action on the element(s).

// Basic syntax is: $(selector).action()

// A $ sign to define / access jQuery
// A(selector) to "query (or find)" HTML elements
// A jQuery action() to be performed on the element(s)
// Examples:

// $(this).hide() //- hides the current element.
// $("p").hide()// - hides all < p > elements.
// $(".test").hide() //- hides all elements with class= "test".
// $("#test").hide() //- hides the element with id = "test".


// $(document).ready(function(){
//     // $("body").click(function(){//hide whole body tag
//     $("#btn").click(function(){
//         $(this).hide();
//     });
// })
    

// The Document Ready Event
$(document).ready(function(){
    // enter your logic here.
});



// jQuery Selectors
// jQuery selectors allow you to select and manipulate HTML element(s).
// All selectors in jQuery start with the dollar sign and parentheses: $().

// The element Selector
// The jQuery element selector selects elements based on the element name.

// $(document).ready(function(){
//     $("#btn").click(function(){
//         $("h3").hide(); //
//     });
// });



$("*")	//Selects all elements
$(this)	//Selects the current HTML element (owner function)
$("p.intro")	//Selects all < p > elements with class= "intro"	
$("p:first")	//Selects the first < p > element
$("ul li:first")	//Selects the first < li > element of the first < ul >
$("ul li:first-child")	//Selects the first < li > element of every < ul >
$("[href]")	//Selects all elements with an href attribute
$("a[target='_blank']")	//Selects all < a > elements with a target attribute value equal to "_blank"
$("a[target!='_blank']")	//Selects all < a > elements with a target attribute value NOT equal to "_blank"
$(":button")	//Selects all < button > elements and < input > elements of type = "button"
$("tr:even")	//Selects all even < tr > elements
$("tr:odd")	//Selects all odd < tr > elements


// jQuery Event Methods
// jQuery is tailor - made to respond to events in an HTML page.
// What are Events ?
//     All the different visitors' actions that a web page can respond to are called events.
//     An event represents the precise moment when something happens.

// Examples:


// moving a mouse over an element
// selecting a radio button
// clicking on an element
// The term "fires/fired" is often used with events.Example: "The keypress event is fired, the moment you press a key".


// Mouse Events	    Keyboard Events	        Form Events	            Document / Window Events
// -----------------------------------------------------------------------------------------
// click	            keypress	            submit	                load
// dblclick	            keydown	                change	                resize
// mouseenter	        keyup	                focus	                scroll
// mouseleave	 	    -----                   blur	                unload



// Commonly Used jQuery Event Methods

// $(document).ready()
// The $(document).ready() method allows us to execute a function when the document is fully loaded.

// click()
// The function is executed when the user clicks on the HTML element.


// Mouse Event--->
//1.click()
// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     });
// });

//2.dblclick() :
// $(document).ready(function () {
//     $("h3").dblclick(function () {
//         $(this).hide();
//     });
// });

//3.mouseenter() :
// $(document).ready(function () {
//     $("p").mouseenter(function () {
//         alert("You entered p1!");
//     });
// });

// 4.mouseleave:
// $(document).ready(function () {
//     $("p").mouseleave(function () {
//         alert("You leave p1!");
//     });
// });


// The hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.

// $(document).ready(function () {
//     $("p").hover(function () {
//         alert("You enter p1!");
//     },
//     function () {
//             alert("You leave p1!");
//         });
// });




























