// Retrieve check-in and check-out dates from the previous page
var urlParams = new URLSearchParams(window.location.search);
var checkInDate = urlParams.get('checkIn');
var checkOutDate = urlParams.get('checkOut');

// Set the check-in and check-out dates in the form
document.getElementById('checkIn').value = checkInDate;
document.getElementById('checkOut').value = checkOutDate;

// Event listener for the sign-in form submission
document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Perform any necessary validation or processing here

    // Redirect or perform other actions as needed
    window.location.href = '../cs3-q4-proj/htdocs/booking.html'; // Replace with the desired destination page
});
