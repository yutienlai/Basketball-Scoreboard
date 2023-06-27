let homeCount = 0;
let guestCount = 0;

let home = document.getElementById("home-score");
let guest = document.getElementById("guest-score");

function homeadd1() {
    homeCount += 1;
    home.textContent = homeCount;
}

function homeadd2() {
    homeCount += 2;
    home.textContent = homeCount;
}

function homeadd3() {
    homeCount += 3;
    home.textContent = homeCount;
}

function guestadd1() {
    guestCount += 1;
    guest.textContent = guestCount;
}

function guestadd2() {
    guestCount += 2;
    guest.textContent = guestCount;
}

function guestadd3() {
    guestCount += 3;
    guest.textContent = guestCount;
}

function reset() {
    homeCount = 0;
    home.textContent = homeCount;
    
    guestCount = 0;
    guest.textContent = guestCount;  
}
