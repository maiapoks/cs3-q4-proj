// Event listener for the search form submission
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var destination = document.getElementById('destination').value;
    var checkIn = document.getElementById('checkIn').value;
    var checkOut = document.getElementById('checkOut').value;
    performHotelSearch(destination, checkIn, checkOut);
});

// Function to perform hotel search
function performHotelSearch(destination, checkIn, checkOut) {
    Papa.parse('hotels.csv', {
        download: true,
        header: true,
        complete: function (results) {
            var filteredHotels = results.data.filter(function (hotel) {
                return hotel.location.toLowerCase().includes(destination.toLowerCase());
            });

            // Sort hotels based on price in ascending order
            filteredHotels.sort(function (a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            });

            var resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';

            // Display the filtered and sorted hotels
            filteredHotels.forEach(function (hotel) {
                var hotelElement = document.createElement('div');
                hotelElement.classList.add('hotel');

                var hotelInfo = document.createElement('div');
                hotelInfo.classList.add('hotel-info');
                hotelInfo.innerHTML = '<h3>' + hotel.name + '</h3>' +
                    '<p>Location: ' + hotel.location + '</p>' +
                    '<p>Price: ' + hotel.price + '</p>' +
                    '<p>Rating: ' + hotel.rating + '</p>';

                var dropdownBtn = document.createElement('button');
                dropdownBtn.classList.add('dropdown-btn');
                dropdownBtn.dataset.url = hotel.url;
                dropdownBtn.innerText = 'Show Details';

                var dropdownContent = document.createElement('div');
                dropdownContent.classList.add('dropdown-content');
                dropdownContent.innerHTML = '<img src="' + hotel.image + '" alt="Hotel Image">' +
                    '<p>' + hotel.description + '</p>';

                hotelInfo.appendChild(dropdownBtn);
                hotelInfo.appendChild(dropdownContent);

                hotelElement.appendChild(hotelInfo);

                resultsContainer.appendChild(hotelElement);
            });

            // Add event listeners to the dropdown buttons
            var dropdownBtns = document.getElementsByClassName('dropdown-btn');
            for (var i = 0; i < dropdownBtns.length; i++) {
                dropdownBtns[i].addEventListener('mouseenter', function () {
                    this.innerText = 'Book a Flight';
                });

                dropdownBtns[i].addEventListener('mouseleave', function () {
                    this.innerText = 'Show Details';
                });

                dropdownBtns[i].addEventListener('click', function () {
                    var hotelUrl = this.dataset.url;
                    window.location.href = hotelUrl;
                });
            }
        }
    });
}
