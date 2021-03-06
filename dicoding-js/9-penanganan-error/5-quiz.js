// TODO 1
class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
}

// TODO 2
const validateNumberInput = (a, b, c) => {

	/* const semuaSisi = [a, b, c]
	 * // const semuaSisi = {pertama: a, kedua: b, ketiga: c}
	 * semuaSisi.forEach((sisi, index) => {
	 *     if (typeof sisi != 'number') {
	 *         throw new ValidationError(`Argumen ${sisi} harus number`)
	 *     }
	 * }) */

	if (typeof a !== "number") {
		throw new ValidationError("Argumen pertama harus number");
	} else if (typeof b !== "number") {
		throw new ValidationError("Argumen kedua harus number");
	} else if (typeof c !== "number") {
		throw new ValidationError("Argumen ketiga harus number");
	}
};

const detectTriangle = (a, b, c) => {
	// TODO 3
	try {
		validateNumberInput(a, b, c);
	} catch (error) {
		if (error instanceof ValidationError) {
			return error.message
		}
	}

	if (a === b && b === c) {
		return "Segitiga sama sisi";
	}

	if (a === b || a === c || b === c) {
		return "Segitiga sama kaki";
	}

	return "Segitiga sembarang";
};

const coba = detectTriangle(1, 4, 'wkwkw')
console.log(coba)

/**
 * Hiraukan kode di bawah ini
 */
module.exports = { ValidationError, validateNumberInput, detectTriangle };
