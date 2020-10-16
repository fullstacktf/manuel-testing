import { ListReader } from "./ListReader";

export class ListReaderFake extends ListReader {
    constructor(text) {
        super();
        this.text = text;

    }

    read() {
        return this.text;
    }
}
