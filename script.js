/* TASKS FOR LAB 9:

FIGURE IT OUT:
Create a class that specifies both the appearance and position of a given
element. Toggle this class when matched elements are clicked on.

TOGGLE CLASS

1.  Your navigation should be in the form of an unordered list.
2.  Style the list items so that they have a width of at least 200px and a height of at
    least 50px.
3.  Each <   l i   > should fade to 0.25 opacity when the user hovers over it, and return
    to full opacity when they remove the cursor.
4.  Each <   l i   > should change background colors when clicked on.
    When the user clicks on a <   l i   > , the word 'Clicked!' should
    appear inside it.

*/


var $p = $('p');
var $navLi = $('nav ul li');
var $anchor = $('nav ul li a');


$($navLi).hover(function() {
    $(this).toggleClass('active');
});

$($anchor).click(function() {
    $(this).css('background-color', '#ff8b94').replaceWith("<p>Clicked!</p>");
});

$($p).click(function() {
    $(this).slideToggle(2000, function() {
        $(this).fadeTo(500, 0.5).width("500px").addClass('testClass');
    });

});
