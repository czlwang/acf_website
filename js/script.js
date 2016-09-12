$(document).ready(function(){

  // Event Descriptions
  var eventDescriptions = {

    "ACF Boba Night": {
      description: "Get to know the members of ACF over boba!",
      location: "McCormick Country Kitchen",
      date:"9/3",
      time:"4:30-6:30pm",
    },

    "Large Group": {
      description: "Come worship at the first large group of the year!",
      location: "W20-306 (Twenty Chimneys)",
      date:"9/9",
      time:"7:00-9:00pm",
    }
    
  };

  for (var eventName in eventDescriptions) {
    $("table.content-events-table").append(
      '<tr class="upcoming-events">' + 
        '<td>' + eventDescriptions[eventName].date + '</td>' + 
        '<td>' + eventDescriptions[eventName].time + '</td>' + 
        '<td class="event-name">' + eventName + '</td>' + 
      '</tr>'
    );
  }

  $("tr.upcoming-events").first().addClass("selected");

  // Initialize the event descriptions
  var selectedEventName = $('tr.selected').find('td.event-name').html();
  displayEventDetails(selectedEventName);

  // This is for the background scrolling effect on the main page.
  $('section[data-type="background"]').each(function(){
    var $section = $(this); // assigning the object
 
    $(window).scroll(function() {
      var yPos = -($(window).scrollTop() / 80); 
       
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $section.css({ backgroundPosition: coords });
    }); 
  });


  // This is the js for the scroll to top button
  $('span.back-to-top').click(function() {
    $('html,body').animate({scrollTop:0}, 1000);
  });

  // This is the js for the upcoming events part
  $('tr.upcoming-events').click(function(ev) {
    $this = $(ev.target).closest('tr');

    if (!$this.hasClass('selected')) {
      $('tr.upcoming-events').removeClass('selected');
      $this.addClass('selected');
      var eventName = $this.find('td.event-name').html();
      displayEventDetails(eventName);
    }
  });

  // Display event details
  function displayEventDetails(eventName) {
    $('span.event-description').html(eventDescriptions[eventName].description);
    $('span.event-location').html(eventDescriptions[eventName].location);
  }


}); 
