// Assign sound variables
const boom = new Audio("/sounds/boom.wav");
const clap = new Audio("/sounds/clap.wav");
const hihat = new Audio("/sounds/hihat.wav");
const kick = new Audio("/sounds/kick.wav");
const openhat = new Audio("/sounds/openhat.wav");
const ride = new Audio("/sounds/ride.wav");
const snare = new Audio("/sounds/snare.wav");
const tink = new Audio("/sounds/tink.wav");
const tom = new Audio("/sounds/tom.wav");

// Assign html element variables
const buttonSection = document.querySelector("#buttons");

// Play sound on click
buttonSection.addEventListener("click", e => {
    console.log(e.target.id);
    switch(e.target.id) {
        case 'a':
            tom.play();
            console.log('that was a tom')
            break;
        case 's':
            hihat.play();
            console.log('that was a hihat')
            break;
        case 'd':
            openhat.play();
            console.log('that was a openhat')
            break;
        case 'f':
            ride.play();
            console.log('that was a ride')
            break;
        case 'j':
            kick.play();
            console.log('that was a kick')
            break;
        case 'k':
            snare.play();
            console.log('that was a snare')
            break;
        case 'l':
            tink.play();
            console.log('that was a tink')
            break;
        default:
            console.log('page was clicked, but not a button')
}
});