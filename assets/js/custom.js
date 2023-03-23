function animateDots(textElement, maxDots) {
    let dots = 0;
    let interval = setInterval(() => {
        if (dots > maxDots) {
            dots = 0;
        }
        let dotsText = '';
        for (let i = 0; i < dots; i++) {
            dotsText += '.';
        }
        textElement.textContent = dotsText;
        dots++;
    }, 500);
    return interval;
}

function startAnimation() {
    const myTextElement = document.getElementById('triple-dot');
    animateDots(myTextElement, 3);
}

window.onload = startAnimation;