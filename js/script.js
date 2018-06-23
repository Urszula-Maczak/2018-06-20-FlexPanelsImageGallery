const panels = document.querySelectorAll('.panel'); //pobranie wszystkich elementów panel
function toggleOpen() {
	this.classList.toggle('open'); //funkcja która dodaje dynamicznie klasę open, 
									//czyli rozszerza element panel o dodatkową przestrzeń flex: 5
}

function toggleActive(e) {
	console.log(e.propertyName); //w konsoli wyświetli front-size, flex-grow (czyli inaczej flex) - właściwości selektora CSS .panel.open
	if(e.propertyName.includes('flex')) { //instrukcja sprawdza czy jest true kiedy argument obeumuje słowo flex, 
										//ponieważ nie możemy zapisać e.propertyName === 'flex' ponieważ przeglądarka Safari
										//nie jest kompatybilna i trzeba stosować zapis 'flex-grow' i tu rodzi problem dówch
										//różnych zapisaów odnośnie jednego warunku stąd zastosowanie includes() rozwiązuje problem
		this.classList.toggle('open-active');//funkcja która dodaje dynamicznie klasę open-active,
											// czyli zadziałą transition wysuwając elemnty p z góry i z dołu po kliknięciu na panel
	}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //nasłuchuje zdarzenie kliknięcia na elemencie panel, 
																		//uruchomić funkcje toggleOpen
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));