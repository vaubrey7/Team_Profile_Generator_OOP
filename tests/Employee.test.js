const { test, expect } = require("@jest/globals");
const Employee = require("../lib/EmployeeClass");

test("Testing Employee Name", () => {
    const employee = new Employee("Vaughn", "34", "vaubrey7@gmail.com")
    expect(employee.getName()).not.toBe(undefined, null)
})
test("Testing Employee ID", () => {
const employee = new Employee("Vaughn", "34", "vaubrey7@gmail.com")
    expect(employee.getId()).not.toBe(undefined, null)
})
test("Testing Employee Email", () => {
const employee = new Employee("Vaughn", "34", "vaubrey7@gmail.com")
    expect(employee.getEmail()).not.toBe(undefined, null)
})
test("Testing Employee Role", () => {
const employee = new Employee("Vaughn", "34", "vaubrey7@gmail.com")
    expect(employee.getRole()).not.toBe(undefined, null)
});