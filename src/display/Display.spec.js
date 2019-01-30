// Test away!
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
// import "jest-dom";

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

    describe("which classname is rendered", () => {
        it("renders red-led when closed", () => {
            const { getByText } = render(<Display closed={true} />);

            const closed = getByText(/closed/i);
            expect(closed).toHaveClass("red-led");
        });

        it("renders green-led when open", () => {
            const { getByText } = render(<Display closed={false} />);

            const open = getByText(/open/i);
            expect(open).toHaveClass("green-led");
        });

        it("renders red-led when locked", () => {
            const { getByText } = render(
                <Display locked={true} closed={true} />
            );

            const locked = getByText(/locked/i);
            expect(locked).toHaveClass("red-led");
        });

        it("renders green-led when lock open", () => {
            const { getByText } = render(
                <Display locked={false} closed={true} />
            );

            const locked = getByText(/lock/i);
            expect(locked).toHaveClass("green-led");
        });
    });
});
