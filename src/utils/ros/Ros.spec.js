import { Ros } from "./Ros";
import { ListParser } from "./utils-kata/ListParser";
import { RosCalculator } from "./utils-kata/RosCalculator";
import { ListReaderFake } from "./utils-kata/ListReaderFake";
import { Product } from "./utils-kata/Product";

describe("Ros", () => {
    it("calculates the total price of the list", () => {
        const listReader = new ListReaderFake("bread, 2, 2\n 12-pack of eggs, 1, 2");
        const listParser = new ListParser();
        const rosCalculator = new RosCalculator();
        const ros = new Ros(listReader, listParser, rosCalculator);
        expect(ros.calculatePrice()).toEqual(6);
    })
})

describe("ListParser", () => {
    it("returns trim correct format", () => {
        const product1 = new Product("bread", "2", "2");
        const product2 = new Product("12-pack of eggs", "1", "2");
        const listParser = new ListParser();
        expect(listParser.parse("bread, 2, 2\n12-pack of eggs, 1, 2")).toEqual([product1, product2]);
    })
})
