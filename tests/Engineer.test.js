const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Testing Engineer Role", () => {
    const engineer = new Engineer("Vaughn", "34", "vaubrey7@gmail.com", "vaubrey7")
    expect(engineer.getRole()).toContain("Engineer")
})
test("Testing Engineer GitHub", () => {
    const engineer = new Engineer("Vaughn", "34", "vaubrey7@gmail.com", "vaubrey7")
        expect(engineer.getGithub()).toStrictEqual(`Engineer GitHub Username / Alias: vaubrey7.`)
});