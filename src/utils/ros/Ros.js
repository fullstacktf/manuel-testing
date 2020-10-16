
export class Ros {
    constructor(listReader, listParser, rosCalculator) {
        this.listReader = listReader;
        this.listParser = listParser;
        this.rosCalculator = rosCalculator;
    }

    calculatePrice() {
        const text = this.listReader.read();
        const list = this.listParser.parse(text);
        const total = this.rosCalculator.calculate(list);
        return total;
    }
}
