import { createStore, combineReducers } from "redux";
import { getLocalS, saveLocalS } from "../../utils/LocalStorage";
import { tasksReducer } from "../reducers/taskReducers";

const storageState = getLocalS()

const reducers = combineReducers({
    tasks: tasksReducer,
})

const store = createStore(
    reducers,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    saveLocalS({
        tasks: store.getState().tasks,
    })
})

export default store;