(function (window, document) {

  var slides = document.querySelectorAll(".slides");
  var btnRight = document.querySelector(".slider__btn--right");
  var btnLeft = document.querySelector(".slider__btn--left");

  let curSlide = 0;
  var maxSlide = slides.length;
  var goToSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = 'translateX(' + 100 * (i - slide) + '%)';
    });
  };
  goToSlide(0);

  var nextSlide = () => {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  var prevSlide = () => {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
  };

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

})(window, document);
