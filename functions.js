/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export function appearOnScroll(){

const faders = document.querySelectorAll(".prices-truck-card");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "-25% 0px -25% 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries
  
) {
  entries.forEach(entry => {
         entry.target.classList.toggle("appear", entry.isIntersecting)
    });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
}

export function appearAnimation(){

const animations = document.querySelectorAll(".term_text, .term_shadow");


const animateOptions = {
  threshold: 0,
  rootMargin: "0px 0px 160px 0px"
};

const appearAnimation = new IntersectionObserver(function(
  entries,
  appearAnimation
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("start");
      appearAnimation.unobserve(entry.target);
    }
  });
},
animateOptions);

animations.forEach(animation => {
	appearAnimation.observe(animation);
});
}

export function appearMenu(){
  const toggleButton = document.getElementsByClassName('menu-box')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  const bodyLock = document.getElementsByTagName('body')[0]

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active'),  
    toggleButton.classList.toggle('active'),
    bodyLock.classList.toggle('menu-open')

  })
}

