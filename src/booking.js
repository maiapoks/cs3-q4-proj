let display = document.getElementById("summary");

// displays booking summary upon clicking submit
function bookingSummary() {
    let name, email, checkIn, checkOut, roomType, hotelName;

    name = document.getElementById("name").value;
    email = document.getElementById("emailAddress").value;
    checkIn = document.getElementById("checkIn").value;
    checkOut = document.getElementById("checkOut").value;
    roomType = document.getElementsByName("roomType");
    hotelName = document.getElementById("hotelName").value;

    console.log(typeof hotelName);

    for (var i = 0; i < roomType.length; i++) {
        if (roomType[i].checked) {
            roomType = roomType[i].value;
            break;
        }
    }

    let price, durationOfStay, date1, date2;

    date1 = new Date(checkIn);
    date2 = new Date(checkOut);

    console.log("date1: " + date1 + " " + "date2: " + date2);

    // determines the no. of nights at the hotel
    durationOfStay = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

    console.log(durationOfStay);

    switch (hotelName) {
        default:
            console.log("error");
            break;

        case "1":
            hotelName = "Boracay Beach Resort";
            price = 1336 * durationOfStay;
            break;

        case "2":
            hotelName = "Nigi Nigi Too";
            price = 3051 * durationOfStay;
            break;

        case "3":
            hotelName = "Alta Vista de Boracay";
            price = 2407 * durationOfStay;
            break;

        case "4":
            hotelName = "Chill-Out Hostel Boracay";
            price = 1323 * durationOfStay;
            break;

        case "5":
            hotelName = "El Nido Cliffside Cottages";
            price = 897 * durationOfStay;
            break;

        case "6":
            hotelName = "Zhaya's Beach and Cottages";
            price = 1350 * durationOfStay;
            break;
    }

    let output = `BOOKING SUMMARY <br/><br/>
					
					Name: ${name} <br/>
					Email: ${email} <br/><br/>

					Check-in Date: ${checkIn} <br/>
					Check-out Date: ${checkOut} <br/>
					Duration of Stay: ${durationOfStay} <br/><br/>

					Room Type: ${roomType} <br/><br/>
					
					Hotel Name: ${hotelName} <br/><br/>
					
					--------------------------------------- <br/><br/>

					 SUBTOTAL: ${price}; <br/><br/>

					 Thank you for booking with us!
					`

    display.innerHTML = output;

    return false;
}

// clears output upon clicking the clear button
function clearForm() {
    display.innerHTML = " ";
}
