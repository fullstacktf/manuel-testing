import disemvowel from "./disemvowelTrolls"

describe("disemvowel", () => {
    it("disemvowel a string", () => {
        expect(disemvowel("This website is for losers LOL!")).toEqual("Ths wbst s fr lsrs LL!")
    })
})
