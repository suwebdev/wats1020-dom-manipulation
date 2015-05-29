//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };


    if(form.firstName.value == "Jane" && form.pswrd.value == "Doe")
  {
    window.open('target.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}

    $ ("vote").click(function(){
      alert("this was clicked");
    })
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

    // Selecting all things with "view-details" class, show more content when the button is clicked by
    // adding an on-click event handler.

    // This function will send the event object.
    $('.view-details').on('click', function(event){
       console.log(event);
    //This is the element that is clicked on. It is stored in the attribute called 'event.target'.
       var targetElement = event.target;
    // This is the container for that target. It means the grandparent element.
       var container = targetElement.parentElement.parentElement;
    // Grab that container and find an element that has the class 'details', then perform the function.
    // Use "each" to modify each of those elements, and the element (el) itself.
       $(container).find('.details').each(function(index, el){
    // Create if/else statement to make all things fadeOut if visible, or fadeIn if not visible.
    // Change text within button to state "view details" if not visible; change to "hide details" if visible.
          if ($(el).is(':visible')){
              $(el).fadeOut();
              targetElement.innerText = "View Details"
          } else {
              $(el).fadeIn();
              targetElement.innerText = "Hide Details"
          }
       });
    });


    // changing progressbar when button is clicked
    $('.vote').on('click', function(event){
       console.log(event);

    $("Great").click(function(event){
         event.preventDefault();
         $(".great").append("<input type='button' class='.progress-bar-info great-progress'>");

         $("Greatest").click(function(event){
              event.preventDefault();
              $(".Greatest").append("<input type='button' class='.progress-bar-success greatest-progress'>");
     });

     for (var i = 0; i < elements.length; i++) {
       // check to see if element has any attributes
       if (elements[i].attributes.length > 0) {



         if (action == 'Great') {
                // increase vote score and color to orange
                parent.find('.data.vote').html(++score).css({'color':'orange'});
                // change vote up button color to orange
                self.css({'color':'orange'});
                // send ajax request with post id & action
                $.ajax({data: {'postid' : postid, 'action' : 'up'}});
              }
