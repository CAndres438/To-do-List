export const getLocalS = () => {
    const tasksStorage = localStorage.getItem('tasks')
    if(tasksStorage === null){
        // return localStorage.setItem('tasks', [])
        return undefined
    }
    return JSON.parse(tasksStorage)
}

export const saveLocalS = (state) =>{
    const tasksState = JSON.stringify(state)
    localStorage.setItem('tasks', tasksState)
}