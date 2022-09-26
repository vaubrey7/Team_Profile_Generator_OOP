const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Testing Intern Role", () => {
    const intern = new Intern("Vaughn Aubrey", "34", "vaubrey7@gmail.com", "MY SCHOOL")
    expect(intern.getRole()).toContain("Intern")
})
test("Testing Intern School", () => {
    const intern = new Intern("Vaughn Aubrey", "34", "vaubrey7@gmail.com", "MY SCHOOL")
        expect(intern.getSchool()).toStrictEqual(`Intern School: MY SCHOOL.`)
});