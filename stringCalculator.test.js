const add = require('./stringCalculator');

describe("String Calculator", () => {
    test("returns 0 for empty input", () => {
        expect(add("")).toBe(0);
    });

    test("returns the number if one number is given", () => {
        expect(add("5")).toBe(5);
    });

    test("adds two comma-separated numbers", () => {
        expect(add("2,3")).toBe(5);
    });

    test("adds multiple numbers", () => {
        expect(add("1,2,3,4")).toBe(10);
    });

    test("handles newlines between numbers", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test("supports custom delimiter", () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test("supports different custom delimiter", () => {
        expect(add("//|\n4|5|6")).toBe(15);
    });

    test("throws correct message for one negative number", () => {
        expect(() => add("-5")).toThrow("negative numbers not allowed -5");
    });

    test("throws error when negative numbers are given", () => {
        expect(() => add("1,-2,-4")).toThrow("negative numbers not allowed -2,-4");
    });

    test("throws error for non-numeric value", () => {
        expect(() => add("//;\na;2")).toThrow("Invalid input: unexpected value(s) 'a'");
    });

    test("handles numbers greater than or equal to 10", () => {
        expect(add("10,15")).toBe(25);
    });

    test("handles mix of custom delimiter and large numbers", () => {
        expect(add("//#\n20#30#50")).toBe(100);
    });

    test("returns 0 if input is just delimiters", () => {
        expect(add(",,\n")).toBe(0);
    });

    test("treats custom delimiter with empty values as 0", () => {
        expect(add("//;\n1;;2")).toBe(3);
    });

    test("supports multi-character delimiter", () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test("supports multi-character delimiter with numbers >= 10", () => {
        expect(add("//[a*c]\n10a*c20a*c30")).toBe(60);
    });

    test("throws error for negative numbers with multi-character delimiter", () => {
        expect(() => add("//[--]\n1--2---3")).toThrow("negative numbers not allowed -3");
    });

    test("Multi-charater delimiter with new line", () => {
        expect(add("//[***]\n1***2***3\n4")).toBe(10);
    });

    test("throws error listing all invalid tokens", () => {
        expect(() => add("//[**]\n1**2***3ah**4"))
            .toThrow("Invalid input: unexpected value(s) '*3ah'");
    });

    test("supports multiple custom delimiters", () => {
        expect(add("//[***][;;][+++++]\n1***2+++++4;;1")).toBe(8);
    });

    test("ignores numbers >= 1000", () => {
        expect(add("1001\n1\n2\n3\n1")).toBe(7);
    });

    test("throws error for empty custom delimiter", () => {
        expect(() => add("//[]\n1241")).toThrow("Invalid input: empty custom delimiter is not allowed");
    });

});
