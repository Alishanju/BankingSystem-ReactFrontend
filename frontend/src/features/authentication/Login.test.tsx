import { render, screen } from "@testing-library/react";

import Login from "./Login";

import TestProvider from "../../test/TestProvider";

describe("Login", () => {

    it("shows login form", () => {

        render(

            <TestProvider>

                <Login />

            </TestProvider>

        );

      expect(

    screen.getByRole("heading", {

        name: "Login"

    })

).toBeInTheDocument();
        expect(

            screen.getByPlaceholderText("Username")

        ).toBeInTheDocument();

        expect(

            screen.getByPlaceholderText("Password")

        ).toBeInTheDocument();

    });

});