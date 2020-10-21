const checkWalk = require("./WalkChecker").default

/**
 * 1. [] -> false
 * 2. [w] -> false
 * 3. [w, s, w] -> false
 * 4. [w, s, w, s] -> false
 * 5. [n, e, s, w] -> true
 * 6. [n, e, s, s] -> false
 * 7. ['n','s','n','s','n','s','n','s','n','s'] -> true
 */

describe("Walk Checker", () => {
    it("returns false if array is empty", () => {
        expect(checkWalk([])).toEqual(false)
    })

    it("returns false because bad coords", () => {
        expect(checkWalk(["w", "s", "w"])).toEqual(false)
    })

    it("returns true", () => {
        expect(checkWalk(["w", "s", "e", "n"])).toEqual(true)
        expect(checkWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])).toEqual(true)
    })
})
