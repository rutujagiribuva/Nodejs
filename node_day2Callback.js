console.log("Callback Function In JS")

// function passed as an argument to another function
const A = () => {
    console.log("hello A")
}
A()

const B = (callback) => {
    callback()
    console.log("hello B")
}
B(A)

// ---- Sum Example ----
//const Sum = (a, b) => {
//     console.log(a + b)
// }

// const Calculator = (callback) => {
//     callback(400, 300)
//     console.log("hello calculator")
// }

// Calculator(Sum)

// ---- Company Example ----
const Conmany = (company_name) => {
    return company_name
}

const Company = (callback, empName, empRole) => {
    const company_name = callback("Wipro")
    return `Emp Name Is ${empName} and Emp Role Is ${empRole} and Company is ${company_name}`
}

console.log(Company(Conmany, "Rutuja", "MERN Developer"))