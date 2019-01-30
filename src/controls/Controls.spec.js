// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("Control Component Tests", () => {
    it("renders closed gate button", () => {
        const { getByText } = render(<Controls />);

        getByText(/close gate/i);
    });

    it("renders lock gate button", () => {
        const { getByText } = render(<Controls />);

        getByText(/lock gate/i);
    });

    it("renders open gate button", () => {
        const { getByText } = render(<Controls closed={true} />);

        getByText(/open gate/i);
    });

    it("renders unlock gate button", () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);

        getByText(/unlock gate/i);
    });

    it("renders lock gate button disabled when gate open", () => {
        const { getByText } = render(<Controls />);

        const lockButton = getByText(/lock gate/i);
        expect(lockButton).toBeDisabled();
    });

    it("renders close gate button disabled when lock closed", () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);

        const closeButton = getByText(/open gate/i);
        expect(closeButton).toBeDisabled();
    });

    // it("renders unlock and open gates", () => {
    //     const { getByText } = render(<Controls locked={true} closed={true} />);

    //     getByText(/unlock gate/i);
    //     getByText(/open gate/i);
    // });

    // it("renders lock and open gates", () => {
    //     const { getByText } = render(<Controls locked={false} closed={true} />);

    //     getByText(/lock gate/i);
    //     getByText(/open gate/i);
    // });

    // it("renders unlock and close gates", () => {
    //     const { getByText } = render(<Controls locked={true} closed={false} />);

    //     getByText(/unlock gate/i);
    //     getByText(/close gate/i);
    // });

    // describe("Control Button events", () => {
    //     it("renders open gate button", () => {
    //         const { getByText } = render(<Controls />);

    //         const button = getByText(/close gate/i);

    //         fireEvent.click(button);

    //         getByText(/open gate/i);
    //     });

    // it("renders unlocked when button clicked", () => {
    //     const { getByText } = render(<Controls />);

    //     const button = getByText(/close gate/i);

    //     fireEvent.click(button);
    //     fireEvent.click(button);
    //     getByText(/close gate/i);
    // });
    // });
});
