
// Variables
var buttons = document.getElementsByTagName("button")
const slides = document.querySelectorAll('.slide');
var pirmas=document.getElementById("start")
var antras=document.getElementById("stop")
// var trecias=document.getElementById("Tiesiog paspausk")
// var caller=document.getElementById("paspausk")

 //skaidrių keitimosi greitis ir jo kitimas
   const slideDuration = 300; 
   const slideSpeedVariation = 10; 
      
   let currentSlideIndex = 0;
   let timeoutId;
   // Function to change the slide
   function changeSlide() {
       slides[currentSlideIndex].style.display = 'none';
       currentSlideIndex = (currentSlideIndex + 1) % slides.length;
       slides[currentSlideIndex].style.display = 'block';

       // Calculate a random speed variation
       const randomVariation = Math.random() * slideSpeedVariation;

       // Set a timeout to change the slide with the calculated duration
       timeoutId=setTimeout(changeSlide, slideDuration + randomVariation);
   }
   function stopSlideChanges() {
    if (currentSlideIndex === 2);
    // stopSlideChanges();
    clearTimeout(timeoutId);
    
}
   // Initially display the first slide and start the slider
   slides[currentSlideIndex].style.display = 'block';
   setTimeout(changeSlide, slideDuration);
   
