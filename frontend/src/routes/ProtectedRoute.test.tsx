import { render } from "@testing-library/react";

import ProtectedRoute from "./ProtectedRoute";

import TestProvider from "../test/TestProvider";

describe("ProtectedRoute", () => {

    it("renders without crashing", () => {

        localStorage.removeItem("token");

        render(

            <TestProvider>

                <ProtectedRoute />

            </TestProvider>

        );

    });

});