import { types } from "../types/types";

const initialState = {
    tasks: [],
}
export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Add:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case types.Add2:
            return {
                ...state,
                tasks: [...state.tasks]
            }

        case types.Update:
            return {
            }

        case types.Delete:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
                }
    
        default:
            return state;
            }

    }