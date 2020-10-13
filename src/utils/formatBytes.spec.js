import formatBytes from "./formatBytes"

describe("formatBytes", () => {
    it("formats in MBs", () => {
        const result = formatBytes(900)
        expect(result).toEqual("900MB")
    })
    it("formats in GBs", () => {
        expect(formatBytes(1900)).toEqual("1GB 900MB")
        expect(formatBytes(568200)).toEqual("568GB 200MB")
    })
    it("formats in TBs", () => {
        expect(formatBytes(1234567)).toEqual("1TB 234GB 567MB")
    })
})
