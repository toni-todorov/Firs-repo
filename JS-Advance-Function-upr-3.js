function solve(name, age, weight, height) {
    let person = {}
    let personalInfoA = {}
    personalInfoA.age = age;
    personalInfoA["weight"] = weight
    personalInfoA.height = height

    let bmi = Number((weight / (Math.pow((height / 100), 2))).toFixed(0));


    let status = ""
    if (bmi < 18.5) {
        status = "underweight"
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "normal"
    } else if (bmi >= 25 && bmi < 30) {
        status = "overweight"
    } else {
        status = "obese"
    }

    if (status === "obese") {
        person.name = name
        person.personalInfo = personalInfoA
        person["BMI"] = bmi
        person.status = status
        person.recommendation = "admission required"
        return person
    } else {
        person.name = name
        person.personalInfo = personalInfoA
        person["BMI"] = bmi
        person.status = status
        return person
    }


}
console.log(solve('Peter', 29, 75, 182))