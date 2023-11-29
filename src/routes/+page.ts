/** @type {import('./$types').PageLoad} */

import { getTestimonialHTML } from "$lib/testimonials";

export function load(data:{ params:any }) {
    // TODO: display the testimonials here, in a single row
    return {testimonialsHTML: getTestimonialHTML()}
}
// Vars.
var	current = 0,
    pos = 0, 
    lastPos = 0,
    slides:HTMLElement[] = [], 
    indicators:HTMLElement[] = [],
    intervalId = 0,
    isLocked = 0,
    clearMainInterval = ()=>{}

    

// Functions.
export const switchTo = (x:number, stop:boolean) => {
    if ((Date.now() - isLocked < 2000) || pos == x) return;

    if (stop) clearInterval(intervalId)

    isLocked = Date.now();

    // Update positions.
        lastPos = pos;
        pos = x;

    // Hide last slide.
        slides[lastPos].classList.remove('top');
        indicators[lastPos].classList.remove('visible');

    // Show new slide.
        slides[pos].classList.add('visible', 'top');
        indicators[pos].classList.add('visible');

    // Finish hiding last slide after a short delay.
        window.setTimeout(function() {

            slides[lastPos].classList.add('instant');
            slides[lastPos].classList.remove('visible');

            window.setTimeout(function() {

                slides[lastPos].classList.remove('instant');
                isLocked = 0;

            }, 100);

        }, 1500);

};

// Main loop.
export const startInterval = () => {
    slides = []
    document.querySelectorAll("#banner article").forEach(article=>{
        let articleElement = article as HTMLElement
        slides.push(articleElement)
    })
    indicators = []
    document.querySelectorAll("#banner .indicators li").forEach(li=>{
        let liElement = li as HTMLElement
        indicators.push(liElement)
    })

    intervalId = window.setInterval(function() {
        
        current++;
        
        if (current >= slides.length) current = 0;
    
        switchTo(current, false);
    
    }, 4000);

    clearMainInterval = () => window.clearInterval(intervalId)
}

export const stopInterval = () => {
    clearMainInterval()
}