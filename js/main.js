(function(){

const scrollLine =  document.querySelector('.scroll-line');


function fillScrollLine() {
	const windowHeight = window.innerHeight;
	const fullHeight = document.body.clientHeight;
	const scrolled = window.scrollY;
	const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

		// the same thing
	// scrollLine.style.width = percentScrolled + '%';
	scrollLine.style.width = `${percentScrolled}%`;

}	




window.addEventListener('scroll', debounce(fillScrollLine));

// from library - to run the scroll at a certain interval
function debounce(func, wait = 15, immediate) {
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




})();