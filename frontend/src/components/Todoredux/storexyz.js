// import {configureStore} from "@reduxjs/toolkit"
// import pasteReducer from "./pasteslice"
import { configureStore } from "@reduxjs/toolkit"
import pasteReducer from "./pasteslice"
export const store = configureStore({
  reducer:{
      paste: pasteReducer
  }
})