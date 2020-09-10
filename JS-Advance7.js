function solve() {
    let array = []
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email

        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    let input = [
        ["Anna", "Simpson", 22, "anna@yahoo.com"],
        ["SoftUni"],
        ["Stephan", "Johnson", 25],
        ["Gabriel", "Peterson", 24, "g.p@gmail.com"]
    ]
    for (let line of input) {
        let [firstName, lastName, age, email] = line
        let person = new Person(firstName, lastName, age, email)
        array.push(person)
    }
    return (array)
}

console.log(solve().join(", "));