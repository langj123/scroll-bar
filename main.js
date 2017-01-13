window.addEventListener('load', function(){
	var aside = document.querySelector('.sidebar'),
      scrollPos = window.pageYOffset,
      wWidth = window.innerWidth,
      wHeight = window.innerHeight,
      curS = false,
      asY = aside.getBoundingClientRect().top,
      initY = aside.getBoundingClientRect().top,
      asBttm = aside.getBoundingClientRect().bottom,
      asPos = window.getComputedStyle(aside, null).getPropertyValue('position'),
      asH = (asBttm - asY),
      curS = 0;

  window.addEventListener('scroll', checkHeight);
  window.addEventListener('resize', checkHeight);

  function checkHeight() {
    scrollPos = window.pageYOffset,
    wWidth = window.innerWidth,
    wHeight = window.innerHeight,
    asY = aside.getBoundingClientRect().top,
    asBttm = aside.getBoundingClientRect().bottom,
    asPos = window.getComputedStyle(aside, null).getPropertyValue('position'),
    asH = (asBttm - asY);

    console.log('aside bottom is ' + asBttm);

    if (wHeight < asH) { // if sidebar height is less than window height
      if (scrollPos > curS) { // for down scrolling
        if (asBttm >= wHeight && (aside.style.position == 'fixed' || asPos == 'fixed')) {
          aside.style.position = 'absolute';
          aside.style.bottom = 'auto';
          aside.style.top = scrollPos + 'px';
        } else if (asBttm < wHeight && (aside.style.position == 'absolute' || asPos == 'absolute')){
          console.log('triggered');
          aside.style.position = 'fixed';
          aside.style.bottom = '0px';
          aside.style.top = 'auto';
        }
      } else if (scrollPos <= curS) { // for up scrolling
        
      }

    } else { // if sidebar height is greate than or equal to window height
      aside.style.position = 'fixed';
      aside.style.top = initY + 'px';
      aside.style.bottom = 'auto';
    }
    curS = scrollPos;
  }
});