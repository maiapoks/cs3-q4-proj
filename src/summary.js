var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');
var email = urlParams.get('email');
var checkInDate = urlParams.get('checkIn');
var checkOutDate = urlParams.get('checkOut');
var bookingDetailsContainer = document.getElementById('bookingDetails');

var bookingDetailsHTML = '<h2>Booking Details</h2>' +
    '<p><strong>Name:</strong> ' + name + '</p>' +
    '<p><strong>Email:</strong> ' + email + '</p>' +
    '<p><strong>Check-in:</strong> ' + checkInDate + '</p>' +
    '<p><strong>Check-out:</strong> ' + checkOutDate + '</p>';

bookingDetailsContainer.innerHTML = bookingDetailsHTML;