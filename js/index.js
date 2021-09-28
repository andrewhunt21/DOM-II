// Your code goes here
function escape(event) {
    if (event.key === 'Escape'){
        document.querySelector('.logo-heading').innerHTML += "<br>THERE IS NO ESCAPE"
    }
}
document.addEventListener('keydown', escape);

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('click', trap);
function trap() {
    alert ("it's a trap!");
}

const bus = document.querySelector('.intro img');
bus.addEventListener('mouseover', busCalifornia);
function busCalifornia() {
    document.querySelector('.intro h2').innerHTML += "<br>You can get on anytime you like, but you can never leave!";
}

