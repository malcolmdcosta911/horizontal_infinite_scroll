const scrollers = document.querySelectorAll(".scroller");
// console.log("scrollers", scrollers);
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches === true) {
  console.log("yes");
  addAnimation();
} else {
  console.log("no");
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  });
  const scrollerInner = document.querySelector(".scroller__inner");

  const scrollerContent = Array.from(scrollerInner.children);

  scrollerContent.forEach((item, index) => {
    const duplicatedItem = item.cloneNode(true);
    if (index == 0) {
      duplicatedItem.style.background = "red";
    }
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
  });
}
