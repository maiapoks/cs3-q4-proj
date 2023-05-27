// Event listener for the search form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var destination = document.getElementById('destination').value;
    var checkIn = document.getElementById('checkIn').value;
    var checkOut = document.getElementById('checkOut').value;
    performHotelSearch(destination, checkIn, checkOut);
});

// Function to perform hotel search
function performHotelSearch(destination, checkIn, checkOut) {
  var database = [
    {
        name: 'Boracay Beach Resort',
        location: 'Boracay',
        price: 'p1336/night',
        rating: 4.2,
        description: 'A beautiful beachfront resort located in the heart of Boracay.',
        image: 'https://example.com/boracay-beach-resort.jpg',
        url: 'https://example.com/boracay-beach-resort'
    },
    {
        name: 'Nigi Nigi Too',
        location: 'Boracay',
        price: 'p3051/night',
        rating: 4.2,
        description: 'A cozy beachfront hotel offering comfortable accommodations and stunning views.',
        image: 'https://example.com/nigi-nigi-too.jpg',
        url: 'https://example.com/nigi-nigi-too'
    },
    {
        name: 'Alta Vista de Boracay',
        location: 'Boracay',
        price: 'p2407/night',
        rating: 4.0,
        description: 'Experience luxury and relaxation at this hilltop resort in Boracay.',
        image: 'https://example.com/alta-vista-de-boracay.jpg',
        url: 'https://example.com/alta-vista-de-boracay'
    },
    {
        name: 'Chill-Out Hostel Boracay',
        location: 'Boracay',
        price: 'p1323/night',
        rating: 4.2,
        description: 'A budget-friendly hostel located just a few steps from the beach.',
        image: 'https://example.com/chill-out-hostel.jpg',
        url: 'https://example.com/chill-out-hostel'
    },
    {
        name: 'El Nido Cliffside Cottages',
        location: 'El Nido',
        price: 'p897/night',
        rating: 4.0,
        description: 'Stay in charming cottages overlooking the breathtaking cliffs of El Nido.',
        image: 'https://example.com/el-nido-cliffside-cottages.jpg',
        url: 'https://example.com/el-nido-cliffside-cottages'
    },
    {
        name: "Zhaya's Beach and Cottages",
        location: 'El Nido',
        price: 'p1350/night',
        rating: 4.6,
        description: 'Relax and unwind in beachfront cottages surrounded by tropical paradise.',
        image: 'https://example.com/zhayas-beach-and-cottages.jpg',
        url: 'https://example.com/zhayas-beach-and-cottages'
    },
];

    // Filter hotels based on the destination
    var filteredHotels = database.filter(function(hotel) {
        return hotel.location.toLowerCase().includes(destination.toLowerCase());
    });

    // Sort hotels based on price in ascending order
    filteredHotels.sort(function(a, b) {
        return a.price - b.price;
    });

    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    // Display the filtered and sorted hotels
    filteredHotels.forEach(function(hotel) {
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
        dropdownBtns[i].addEventListener('mouseenter', function() {
            this.innerText = 'Book a Room';
        });

        dropdownBtns[i].addEventListener('mouseleave', function() {
            this.innerText = 'Show Details';
        });

        dropdownBtns[i].addEventListener('click', function() {
            var hotelUrl = this.dataset.url;
            window.location.href = hotelUrl;
        });
    }
}
