import fs from "fs"

export class BannedWordsListFileReader {
    read() {
        const bannedWordsFile = fs.readFileSync("./banned-words.txt", "utf-8")

        const bannedWords = bannedWordsFile.trim().split("\n")

        return bannedWords
    }
}

export class TextFileReader {
    read() {
        return fs.readFileSync("./text.txt", "utf-8")
    }
}

export class CensoredTextWriter {
    write(censoredText) {
        fs.writeFileSync("./text.txt", censoredText)
    }
}
export class Censorer {

    constructor(textFileReader, bannedWordsListFileReader, censoredTextWriter) {
        this.textFileReader = textFileReader
        this.bannedWordsListFileReader = bannedWordsListFileReader
        this.censoredTextWriter = censoredTextWriter
    }

    censor() {
        const text = this.textFileReader.read()
        const bannedWords = this.bannedWordsListFileReader.read()

        let censoredText = text

        for (const bannedWord of bannedWords) {
            censoredText = censoredText.replace(bannedWords, "XXXX")
        }

        this.censoredTextWriter.write(censoredText)
    }
}
