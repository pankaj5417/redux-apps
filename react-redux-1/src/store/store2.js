import { createStore } from "redux";

//import { reducer } from "./reducer";
import { reducer } from "../features/Todos/reducer";

export const store2=createStore(reducer)