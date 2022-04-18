import { types } from "../types/types"


export const AddTask = (task) =>{
    return{
        type: types.Add,
        payload:task,
    }
}
export const AddTask2 = (task) =>{
    return{
        type: types.Add2,
        payload:task,
    }
}

export const UpdateTask = (id) =>{
    return{
        type: types.Update,
        payload:id
    }
}

export const DeleteTask = (id) =>{
    return{
        type: types.Delete,
        payload: id
    }
}