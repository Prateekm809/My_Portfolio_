


  var typed = new Typed('#element', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
      'Hello',
      'नमस्ते',
      'Hola',
      '你好',
      'হ্যালো',
      'Привет',
      'こんにちは',
      'ਸਤ ਸ੍ਰੀ ਅਕਾਲ'
    ],
    stringsElement: null,
  
    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 100,
  
    /**
     * @property {number} startDelay time before typing starts in milliseconds
     */
    startDelay: 100,
  
    /**
     * @property {number} backSpeed backspacing speed in milliseconds
     */
    backSpeed: 30,
  
    /**
     * @property {boolean} smartBackspace only backspace what doesn't match the previous string
     */
    smartBackspace: true,
  
    /**
     * @property {boolean} shuffle shuffle the strings
     */
    shuffle: false,
  
    /**
     * @property {number} backDelay time before backspacing in milliseconds
     */
    backDelay: 1000,
  
    /**
     * @property {boolean} fadeOut Fade out instead of backspace
     * @property {string} fadeOutClass css class for fade animation
     * @property {boolean} fadeOutDelay Fade out delay in milliseconds
     */
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
  
    /**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
    loop: true,
    loopCount: Infinity,
  
    /**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    showCursor: true,
    cursorChar: '!',
    autoInsertCss: true,
  

  });



  //Type it 
  new TypeIt("#change", {
    speed: 150,
  })
    .type("ASPIRING")
    .pause(500)
    .move(-7)
    .type('N')
    .type(' ')
    .type("IN")
    .move(7)
    .go();
  
    window.onscroll = function() {scrollFunction()};

    function adjustNavbar() {
      var navbar = document.getElementById("navbar");
      var logo = document.getElementById("logo");
  
      if (window.scrollY > 80) {
          navbar.style.padding = "30px 0";
          logo.style.fontSize = "25px";
      } else {
          navbar.style.padding = "45px 0";
          logo.style.fontSize = "35px";
      }
  }
  
  var prevScrollPos = window.pageYOffset;

  function adjustNavbar() {
      var currentScrollPos = window.pageYOffset;
      var navbar = document.getElementById("navbar");
      var logo = document.getElementById("logo");
  
      if (currentScrollPos > 80) {
          navbar.style.padding = "30px 0";
          logo.style.fontSize = "25px";
      } else {
          navbar.style.padding = "45px 0";
          logo.style.fontSize = "35px";
      }
  
    
      if (currentScrollPos > prevScrollPos) {
          // Scrolling down
          navbar.style.top = "-80px"; 
      } else {
          // Scrolling up
          navbar.style.top = "0";
      }
  
      prevScrollPos = currentScrollPos;
  }
  

  window.onload = function () {
      adjustNavbar();
  };
  
  
  window.onscroll = function () {
      adjustNavbar();
  };

  

  document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.page:not(#home)').forEach(page => {
      page.classList.add('hide');
    });

    document.querySelectorAll('.item').forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        const targetPageId = this.getAttribute('data-target');
        changePage(targetPageId);
      });
    });

    document.getElementById('logo').addEventListener('click', function (event) {
      event.preventDefault();
      changePage('home');
    });
  
    document.querySelector('.item[data-target="home"]').addEventListener('click', function (event) {
      event.preventDefault();
      changePage('home');
    });
  });
  
  function changePage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('show');
      page.classList.add('hide');
    });
  

    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.remove('hide');
    selectedPage.classList.add('show', 'animate__animated', 'animate__bounceInUp');
  }
 

  window.addEventListener("load", function () {
    document.getElementById("loader-container").style.display = "none";
});


document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.title,.cert,.skill,.name');
 

  const options = {
      root: null,
      rootMargin: '30px',
      threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  }, options);

  images.forEach(image => {
      observer.observe(image);
  });
 
});
const glow = document.createElement("div");
glow.className = "glow-point";
document.body.appendChild(glow);

const updateGlowPosition = (e) => {
  const mouseX = e.clientX + window.scrollX;
  const mouseY = e.clientY + window.scrollY;
  
  glow.style.left = `${mouseX}px`;
  glow.style.top = `${mouseY}px`;
};

window.addEventListener("mousemove", updateGlowPosition);
window.addEventListener("scroll", updateGlowPosition);



const scrollers = document.querySelectorAll(".scroller");


if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {

    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);
});

function handleMouseMove(event) {
  const cardRect = this.getBoundingClientRect();
  const mouseX = event.clientX - cardRect.left;
  const mouseY = event.clientY - cardRect.top;

  const rotateX = (mouseY / cardRect.height - 0.5) * 30;
  const rotateY = (mouseX / cardRect.width - 0.5) * 30;

  this.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  this.style.boxShadow = `0 ${Math.abs(rotateX)}px ${Math.abs(rotateY)}px rgba(0, 0, 0, 0.2)`;
}

function handleMouseLeave() {
  this.style.transform = 'rotateX(0deg) rotateY(0deg)';
  this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
}


document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('#navbar ul').classList.toggle('show');
  document.querySelector('#sidebar').classList.toggle('show'); 
});

document.querySelectorAll('#navbar .side a').forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelector('#sidebar').classList.remove('show');
    document.querySelector('#navbar ul').classList.remove('show');
    document.querySelector('a').classList.add('clicked');
    
  });
});

document.querySelectorAll('nav ul li ').forEach(function(li) {
  li.addEventListener('click', function() {
    document.querySelectorAll('nav ul li').forEach(function(item) {
      item.classList.remove('working');
    });
    document.querySelector('a').classList.add('clicked');
    li.classList.add('working');
  });
});

