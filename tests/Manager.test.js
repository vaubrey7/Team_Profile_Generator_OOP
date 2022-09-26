const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Testing Manager Role", () => {
    const manager = new Manager("Vaughn Aubrey", "34", "vaubrey7@gmail.com", "69")
    expect(manager.getRole()).toContain("Manager")
})
test("Testing Manager Office Number", () => {
    const manager = new Manager("Vaughn Aubrey", "34", "vaubrey7@gmail.com", "69")
        expect(manager.getOfficeNumber()).toStrictEqual(`Manager Office Number: 69.`)
});