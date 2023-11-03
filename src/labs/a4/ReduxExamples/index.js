import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddReducer from "./AddRedux";
import TodoList from "./todos/todoList";

const ReduxExamples = () => {
    return (
        <div>
            <h2>Redux Examples</h2>
            <HelloRedux />
            <CounterRedux />
            <AddReducer />
            <TodoList />
        </div>
    );
};

export default ReduxExamples;