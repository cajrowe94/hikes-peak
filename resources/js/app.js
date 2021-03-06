$(document).ready(function(){
    
    //select the features section, created separate class for the jquery
    $('.js--section-features').waypoint(function(direction){
        //if the user scrolls down into this section
        if (direction == "down"){
            $('nav').addClass('sticky'); //add the sticky class to nav
        } else {
            //if user scrolls out of section
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;' //triggers 60px before the section
    });
    
    //Buttons scrolls
    $('.js--scroll-to-plan').click(function(){
        //scrolls to the top of plans section, animates for 1 sec
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        //scrolls to the top of info section, animates for 1 sec
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    //Navigation scroll
    //credit: https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    
});