// if and else examples
let something_is_true = true // or false
let something_is_false = false

if (something_is_true)
	do_something;

if (something_is_true) {
	do_something;
} else {
	do_something_different;
}

if (something_is_true) {
	do_something;
} else if (something_is_false) {
	do_something_2;
} else {
	do_something_different;
}

if (something_is_true) {
	do_something;
} else if (something_is_false) {
	do_something_2;
}

/** conditional statements
 * ==	equal
 * >=	more or equal
 * >	more
 * <=	less or equal
 * <	less
 * !=	not equal
 * &&	and
 * ||	or
 */

// swich
switch (expression) {
	case value1:
		statement;
		break;
	case value2:
		statement;
		break;
	case value3:
		statement;
		break;
	default:
		statement;
		break;
}

// ternary operator
let f = (something_is_true) ? "this is true" : "this is false"