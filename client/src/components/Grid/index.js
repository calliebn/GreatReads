import React from "react";

// Exports the Container, Row, and Column components from this file

// This following components lets us use Bootstrap without having to be concerned with class names
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>
}

export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
}

//This component lets us size Bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-med-12">
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}