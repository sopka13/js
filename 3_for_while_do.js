// Cycles
for (let i = 0; i < 10; i++) {
	document.writeln("Hello");
}

// Break
for (let i = 0; i < 10; i++) {
	if (i == 5)
		break;
	document.writeln("Hello");
}

// Continue
for (let i = 0; i < 10; i++) {
	if (i == 5)
		continue;
	document.writeln("Hello");
}

// while
let ff = 10
while (ff < 20) {
	document.write("say");
	ff++;
}

// do while
let count = 0;
do {
	document.writeln("I don't know what I am doing here! <br>");
	count++;
} while (count < 10);
