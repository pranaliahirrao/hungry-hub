import { Sum } from "../Sum";


test("should give Sum of two numbers", () => {
    const result = Sum(3,5);
    // Assertion
    expect(result).toBe(8);
});