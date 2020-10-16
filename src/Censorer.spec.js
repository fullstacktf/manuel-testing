import { Censorer, TextFileReader, BannedWordsListFileReader, CensoredTextWriter } from "./Censorer"

class CensoredTextWriterFake extends CensoredTextWriter {
    write(censoredText) {
        this.censoredText = censoredText
    }
}

class TextFileReaderFake extends TextFileReader {
    constructor(text) {
        super()
        this.text = text
    }

    read() {
        return this.text
    }
}

class BannedWordsListFileReaderFake extends BannedWordsListFileReader {
    constructor(bannedWords) {
        super()
        this.bannedWords = bannedWords
    }

    read() {
        return this.bannedWords
    }
}



describe("Censorer", () => {
    it("censors single words", () => {
        const originalText = "You're a nice person"
        const bannedWords = ["nice", "good"]
        const censorer = new Censorer(
            new TextFileReaderFake(originalText),
            new BannedWordsListFileReaderFake(bannedWords),
            new CensoredTextWriterFake())

        censorer.censor()

        expect(censoredTextWriter.censoredText).toEqual("You're a XXXX person")
    })
})