// setTimeout - отсрочка запуска функции.
let timeoutID = setTimeout(someFunction, delayInMilliseconds);

// clearTimeout - отмена выполнения таймаута.
clearTimeout(timeoutID);

// setInterval - выполнение функции с указанным интервалом бесконечно.
let intervalID = setInterval(someFunction, delayInMilliseconds);

// clearInterval - отмена выполнения интервала.
clearInterval(intervalID);

// requestAnimationFrame - запускает анимацию мимо всего остального js кода особым образом.
// значение обновления выбирается браузером самостоятельно в зависимости от внешних условий.
let requestID = requestAnimationFrame(someFunction);
// Испольование :
function animationLoop() {
	// код, отвечающий за анимацию
	requestAnimationFrame(animationLoop)
}
// Начать выполнение цикла анимации!
animationLoop();