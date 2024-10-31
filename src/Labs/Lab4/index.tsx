
import React from "react";
import ReduxExamples from "./ReduxExamples";

import ClickEvent from "./ClickEvent"
import PassingDataOnEvent from "./PassingDataOnEvent"
import PassingFunctions from "./PassingFunctions"
import TodoList from "./ReduxExamples/todos/TodoList";



export default function Lab4(){
    function sayHello() {
        alert("Hello");
      }
    
    return(
        <div>
            Lab 4
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello} />



            <ReduxExamples/>
            <TodoList/>


        </div>
    )
}