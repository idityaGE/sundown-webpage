function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


//fixed img code

let eleContainer = document.querySelector(".elem-container");
let fixImg = document.querySelector("#fixed-img");

eleContainer.addEventListener('mouseenter', function () {
  fixImg.style.display = 'block';
});

eleContainer.addEventListener('mouseleave', function () {
  fixImg.style.display = 'none';
});

let imgBg = document.querySelectorAll('.elem');
imgBg.forEach(function (e) {
  e.addEventListener('mouseenter', function () {
    let image = e.getAttribute('data-img');
    fixImg.style.backgroundImage = `url(${image})`;
  })
});

