const form = document.getElementById("reservationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){
    e.preventDefault();

    message.innerText =
        "Reservation request submitted successfully!";

    form.reset();
});