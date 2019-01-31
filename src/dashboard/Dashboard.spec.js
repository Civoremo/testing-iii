// Test away
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("Dashboard Tests", () => {
    it("renders <Display />", () => {
        const { getByTestId } = render(<Dashboard />);
        const dis = getByTestId(/display/i);
        expect(dis).toBeInTheDocument();
    });

    it("renders <Controls />", () => {
        const { getByTestId } = render(<Dashboard />);
        const con = getByTestId(/controls/i);
        expect(con).toBeInTheDocument();
    });
});
