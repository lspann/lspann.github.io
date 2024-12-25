//Navigation
let toggleMenu = document.querySelector('.toggleMenu');
let navigation = document.querySelector('.navigation');
toggleMenu.onclick = function(){
    navigation.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        { title: 'Event 1', start: '2024-10-23' },
        { title: 'Event 2', start: '2024-10-24' }
      ]
    });

    calendar.render();
  });

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: 'https://example.com/path/to/your.ics' // Your iCal URL here
    });

    calendar.render();
  });

events: [
  { 
    title: 'Meeting', 
    start: '2024-10-23T10:30:00',
    end: '2024-10-23T12:30:00',
    backgroundColor: '#ff9f89', // Custom background color
    borderColor: '#ff4e42', // Custom border color
    textColor: '#fff' // Custom text color
  },
  {
    title: 'Conference',
    start: '2024-10-25',
    backgroundColor: '#1e90ff'
  }
]

var calendar = new FullCalendar.Calendar(calendarEl, {
    editable: true, // Enables dragging and resizing
    eventDrop: function(info) {
      alert(info.event.title + " was dropped on " + info.event.start.toISOString());
    },
    eventResize: function(info) {
      alert(info.event.title + " was resized to " + info.event.end.toISOString());
    }
});

document.getElementById('addEventBtn').addEventListener('click', function() {
    var title = document.getElementById('eventTitle').value;
    var start = document.getElementById('eventStart').value;

    if (title && start) {
      calendar.addEvent({
        title: title,
        start: start
      });
      alert('Event added: ' + title + ' on ' + start);
    } else {
      alert('Please provide both title and start date');
    }
});

// eventClick: function(info) {
//   alert('Event: ' + info.event.title);
//   alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
//   alert('View: ' + info.view.type);

//   // Change background color of the clicked event
//   info.el.style.backgroundColor = 'red';
// }