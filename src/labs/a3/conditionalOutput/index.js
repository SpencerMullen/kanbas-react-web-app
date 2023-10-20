import React from "react";
import ConditionalOutputIfElse
    from "./conditionalOutputIfElse";
import ConditionalOutputInline
    from "./conditionalOutputInline";
const ConditionalOutput = () => {
    return (
        <>
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
        </>
    );
};
export default ConditionalOutput;