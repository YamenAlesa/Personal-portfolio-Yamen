// JavaScript for scroll animations
document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const runAnimations = () => {
    timelineItems.forEach((item) => {
      if (isElementInViewport(item)) {
        item.classList.add("in-view");
      }
    });
  };

  window.addEventListener("scroll", runAnimations);
  runAnimations(); // Initial check
});
