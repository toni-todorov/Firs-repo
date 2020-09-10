function solve() {
    arguments
    let objArr = []
    let countArr = {}

    for (let i = 0; i < arguments.length; i++) {
        let obj = {};
        let argumentType = typeof arguments[i]
        obj[argumentType] = arguments[i]
        objArr.push(obj)
        if (countArr[argumentType] === undefined) {
            countArr[argumentType] = 1
        } else {
            countArr[argumentType]++
        }
    }



    objArr.forEach(line => {
        for (let value in line) {
            console.log(`${value}: ${line[value]}`);
        }
        });

    let newArr = Object.entries(countArr)
    newArr.sort((a, b) => b[1] - a[1])
    newArr.forEach(element => console.log(`${element[0]} = ${element[1]}`))
}


solve('cat', 42, function () { console.log('Hello world!'); })