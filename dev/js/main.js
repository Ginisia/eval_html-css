var burgermen = document.querySelector('.burger-menu');
var hiddenmenu = document.querySelector('.window-coucou');

burgermen.addEventListener('click', function () {
	hiddenmenu.classList.toggle('active');
});
