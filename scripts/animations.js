async function animateSequentially(items, animationClass, delay) {
  for (let index = 0; index < items.length; index++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        items[index].classList.add(animationClass);
        resolve();
      }, index * delay);
    });
  }
}

const navListItems = document.querySelectorAll(".js-nav-li");
const preintroItems = document.querySelectorAll(".js-preintro-items");
const aboutMeItems = document.querySelectorAll(".js-aboutme-animation");
const skillListItems = document.querySelectorAll(".js-skills-items-animation");
const sideInfo = document.querySelectorAll(".js-sideinfo-animation");
// const projectItemsLeft = document.querySelectorAll(".js-project-items-animation-left");
// const projectItemsRight = document.querySelectorAll(".js-project-items-animation-right");
// const projectHeading = document.querySelector(".js-title-projects");

// Define animation sequences
const animations = [
  { items: navListItems, animationClass: "slide-in-blurred-top", delay: 100 },
  { items: preintroItems, animationClass: "puff-in-center", delay: 100 },
  { items: aboutMeItems, animationClass: "puff-in-center", delay: 100 },
  { items: skillListItems, animationClass: "swing-in-top-fwd", delay: 100 },
  { items: sideInfo, animationClass: "fade-in", delay: 100 },
];

// Execute animations sequentially
const runAnimations = async () => {
  for (const animation of animations) {
    await animateSequentially(
      animation.items,
      animation.animationClass,
      animation.delay
    );
  }
};

// Start the animations
runAnimations();
