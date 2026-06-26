//Random Background Generator
function randomNumber(min, max) {
    return String(Math.floor(Math.random() * (max - min + 1) + min)).padStart(3, '0');
}
// 🎨 Random portrait image for preloader and homepage
const galleryImages = [
  "assets/gallery/1.jpg",
  "assets/gallery/2.jpg",
  "assets/gallery/3.jpg",
  "assets/gallery/4.jpg",
  "assets/gallery/5.jpg",
  "assets/gallery/6.jpg",
  "assets/gallery/7.jpg",
  "assets/gallery/8.jpg",
  "assets/gallery/9.jpg",
  "assets/gallery/10.jpg",
  "assets/gallery/11.jpg",
  "assets/gallery/12.jpg",
  "assets/gallery/13.jpg",
  "assets/gallery/14.jpg",
  "assets/gallery/15.jpg",
  "assets/gallery/16.jpg",
  "assets/gallery/17.jpg",
  "assets/gallery/18.jpg",
  "assets/gallery/19.jpg",
  "assets/gallery/20.jpg",
  "assets/gallery/21.jpg",
  //"assets/gallery/22.jpg",
  //"assets/gallery/23.jpg",
  //"assets/gallery/24.jpg",
  //"assets/gallery/25.jpg"
];

// Pick a random one
const randomImage = galleryImages[Math.floor(Math.random() * galleryImages.length)];

// Wait until the DOM has the portrait image available
document.addEventListener("DOMContentLoaded", () => {
  const portraitImg = document.getElementById("portraitImage");
  if (portraitImg) portraitImg.src = randomImage;
});

const generatedNumber = randomNumber(1, 350);
document.querySelector('.portrait img').src = "./assets/gallery/IMG_6016.JPG";
const split = new SplitType(".name", {
    types: "chars, words"
});

const preLoader = gsap.timeline({delay: 1, repeat: -1});

preLoader.from(split.chars, {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.05,
    ease: "power2.inOut"
});
preLoader.to(split.chars, {
    delay: 1,
    duration: 1,
    opacity: 0,
    y: -20,
    stagger: 0.05,
    ease: "power2.inOut"
});

document.addEventListener('DOMContentLoaded', () =>{
    window.addEventListener('load',()=>{
        gsap.to(".preloader", {
            duration: 1,
            yPercent: -100,
            ease: "power2.inOut",
            delay: 2,
        });
        // Only set overflow if modal is not open
        setTimeout(() => {
            const modal = document.getElementById("galleryModal");
            if (!modal || !modal.classList.contains("active")) {
                document.body.style.overflow = "auto";
            }
        }, 3000);
    });
});
