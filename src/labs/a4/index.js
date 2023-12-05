import React from "react";
import Add from "./add";
import ClickEvent from "./clickEvent";
import PassingDataOnEvent from "./passingDataOnEvent";
import PassingFunctions from "./passingFunctions";
import EventObject from "./eventObject";
import Counter from "./counter";
import BooleanStateVariables from "./booleanStateVariables";
import StringStateVariables from "./stringStateVariables";
import DateStateVariable from "./dateStateVariable";
import ObjectStateVariable from "./objectStateVariable";
import ArrayStateVariable from "./arrayStateVariable";
import ParentStateComponent from "./parentStateComponent";
import ReduxExamples from "./ReduxExamples";
import store from "../store";
import { Provider } from "react-redux";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return (
        <Provider store={store}>
            <h1>Assignment 4</h1>
            <Add a={1} b={2} />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ReduxExamples />
        </Provider>
    );
};
export default Assignment4;