const quicksort = (list) => {
    if (list.length <= 1) {
        return list
    }
    const center = list[0]
    const left = []
    const right = []
    for (let i = 1; i < list.length; i++) {
        if (list[i] < center) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }

    return [...quicksort(left), center, ...quicksort(right)]
}

const findlongestPrefix = (strs) => {
    const sorted = quicksort(strs)

    let output = ''
    let firstword = sorted[0]
    let lastword = sorted[sorted.length - 1]
    for (var i = 0; i < firstword.length; i++) {
        if (firstword[i] == lastword[i]) {
            output += firstword[i]
        } else {
            break
        }
    }
    return output 
}

console.log('["flower","flow","flight"]')
console.log(findlongestPrefix(["flower","flow","flight"]) === "fl")

console.log('["dog","racecar","car"]')
console.log(findlongestPrefix(["dog","racecar","car"]) === "")