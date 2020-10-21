function isValidWalk(walk) {
    if (walk.length == 0) {
        return false
    }

    let x = 0
    let y = 0

    walk.forEach((e) => {
        switch (e) {
            case "n": y += 1
                break
            case "s": y -= 1
                break
            case "e": x += 1
                break
            case "w": x -= 1
                break
        }
    })

    return (x == 0 && y == 0)
}

export default isValidWalk
