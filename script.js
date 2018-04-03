/*

Program Name: Recipe Display

Application Author: Derek Labios

Date: 4/6/18

Filename:script.js

*/

/* global $ */

//displays the next element after the current target

function display (event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of function

//attach event listner to h3 elements to invoke display function when clicked

$("h3").click(display);
