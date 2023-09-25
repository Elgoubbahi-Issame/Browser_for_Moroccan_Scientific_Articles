import articleReducer from "./articleReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    articles: articleReducer,
})
export default rootReducer;