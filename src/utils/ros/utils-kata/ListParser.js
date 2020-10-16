import { Product } from "./Product";

export class ListParser {

    parse(text) {
        const formattedTextList = text.split(/\n|,/g).map((e) => e.trim());
        let productList = [];

        for (let i = 0; i < formattedTextList.length; i += 3) {
            const name = formattedTextList[i];
            const lot = formattedTextList[i + 1];
            const price = formattedTextList[i + 2];
            productList.push(new Product(name, lot, price));
        }

        return productList;
    }
}
