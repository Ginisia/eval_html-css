var burgermen = document.querySelector('.burger-menu');
var hiddenmenu = document.querySelector('.window-coucou');
var cross = document.querySelector('.cross-wind');

burgermen.addEventListener('click', function () {
	hiddenmenu.classList.toggle('active');
});
