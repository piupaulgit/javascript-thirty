function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in');

function slideImage(e){
    sliderImages.forEach(eachImage => {
        const slideInAt = window.scrollY + window.innerHeight - eachImage.height/3;
        const imageBottom = eachImage.offsetTop + eachImage.height;
        const isHalfShown = slideInAt > eachImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            eachImage.classList.add('active');
          } else {
            eachImage.classList.remove('active');
          }
    })
}

window.addEventListener('scroll', debounce(slideImage))
