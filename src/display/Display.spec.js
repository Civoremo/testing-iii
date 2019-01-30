// Test away!
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("Display tests", () => {
    describe("display labels", () => {
        it("renders labels for unlock", () => {
            const { getByText } = render(<Display />);

            getByText("Unlocked");
        });

        it("renders labels for open", () => {
            const { getByText } = render(<Display />);

            getByText("Open");
        });

        it("renders labels for close", () => {
            const { getByText } = render(
                <Display locked={false} closed={true} />
            );

            getByText("Closed");
        });

        it("renders labels for lock", () => {
            const { getByText } = render(
                <Display locked={true} closed={true} />
            );

            getByText("Locked");
        });
    });

    describe("which class", () => {
        it("renders red-led when closed", () => {
            const { getByText } = render(<Display closed={true} />);

            const closedLabel = getByText("Closed");

            expect(closedLabel).toHaveClass(/led red-led/i);
        });
    });
});
