const moneyFormat = require("./moneyformat").default

describe("moneyFormat", () => {
    it("works with two decimals", () => {
        const result = moneyFormat(99.99)
        expect(result).toEqual("$99.99")
    })
})
