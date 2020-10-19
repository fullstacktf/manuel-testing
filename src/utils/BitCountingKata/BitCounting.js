const countBits = (n) => {
    if (n <= 0) {
        return 0
    }

    let binaryNumber = ''
    while (n > 1) {
        binaryNumber = calculateRemainder(n) + '' + binaryNumber
        n = Math.floor(n / 2)
        if (n <= 1) {
            binaryNumber = "1" + binaryNumber
        }
    }
    return calculateNumberOfBitsEqualsToOne(binaryNumber)
};

const calculateRemainder = (n) => {
    return n % 2
}

const calculateNumberOfBitsEqualsToOne = (n) => {
    let counter = 0
    for (const bit of n) {
        if (bit === "1") {
            counter++
        }
    }
    return counter
}

export default countBits
