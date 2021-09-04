/* function minMax(arrayOfNumbers) {
 *     let currentMin = arrayOfNumbers[0];
 *     let currentMax = arrayOfNumbers[0];
 *     for (value of arrayOfNumbers) {
 *         if (value < currentMin) {
 *             currentMin = value;
 *         } else if (value > currentMax) {
 *             currentMax = value;
 *         }
 *     }
 *
 *     console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
 * }
 *
 * minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]); */

/* class MyCustomError extends Error {
 *     constructor(message) {
 *         super(message);
 *         this.name = "MyError";
 *     }
 * }
 *
 * try {
 *     throw new MyCustomError("This is an error");
 * } catch (e) {
 *     console.log(e.message);
 * } */

const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);
