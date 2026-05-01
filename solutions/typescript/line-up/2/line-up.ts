export function format(name: string, number: number): string {
	let numeral: string | undefined;
	if (number % 100 >= 11 && number % 100 <= 13) {
		numeral = 'th';
	} else {
		switch (number % 10) {
			case 1:
				numeral = 'st';
				break;
			case 2:
				numeral = 'nd';
				break;
			case 3:
				numeral = 'rd';
				break;
			default:
				numeral = 'th';
		}
	}
	return `${name}, you are the ${number}${numeral} customer we serve today. Thank you!`;
}
