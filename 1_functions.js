// Declaration and inicialisation
function sayHello() {
	alert("Hello");
}
function showDistance(speed, time) {
	alert(speed * time);
}
function getDistance(speed, time) {
	let distance = speed * time;
	return distance;
}

// Call functions
sayHello();
showDistance(10, 20);
let dist = getDistance(10, 20);