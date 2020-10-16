import fs from "fs";

export class ListReader {
    read() {
        return fs.readFileSync("./today.ros", "utf-8");;
    }
}
