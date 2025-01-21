let index = 0;
let texts = ['FREELANCER', 'WEB DEVELOPER']
let currentTextIndex = 0;
let text = 'FREELANCER';
let forward = true;
let speed = 200;



function typeWriter(){
    const displayElement = document.getElementById('typewrite');

    // Get all the current texts
    const currentText = texts[currentTextIndex]

    // Display the current text
    displayElement.innerHTML = `${currentText.substring(0, index)}<span class="pipe">|</span>`;

    if(forward){
        index++;
        speed = 200;

        if (index > currentText.length) {
            forward = false;
        }
    } else {
        
        index--;
        speed = 100;
        if(index < 0){
            forward = true;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
    }

    


    //Restart the typing efect when it reaches the end
    // if(index > text.length) {
    //     index = 0;
    // }

    // Set a delay and call the function recursively
    setTimeout(typeWriter, speed)
}

typeWriter();


const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
})