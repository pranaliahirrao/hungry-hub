import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us pages Test cases", () => {
    // it is just alias of test
    it("should render Contact Us page", () => {
        render(<Contact/>);
        // Querying
        const heading = screen.getByRole("heading");
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("should load button inside Contact component", () => {
        render(<Contact/>);
        const btnElement = screen.getByRole("button");
        expect(btnElement).toBeInTheDocument();
    });
    
    test("should load 2 input boxes inside Contact component", () => {
        render(<Contact/>);
        const inputElements = screen.getAllByRole('textbox').length;   // for input 
        expect(inputElements).toBe(2);
    });    
})



