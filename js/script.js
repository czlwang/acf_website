$(document).ready(function(){

  // Event Descriptions
  var eventDescriptions = {

    "Worship & Prayer Night": {
      description: "Join us for a refreshing night of worship and prayer as we fellowship together. Bring an instrument if you so choose!",
      location: "W20-306 (Twenty Chimneys)",
      date:"9/16",
      time:"7:30-9:00pm",
    },

    "Joint Large Group with Intervarsity": {
      description: "We join Intervarsity for a night of worship!",
      // location: "W20-306 (Twenty Chimneys)",
      date:"9/23",
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
