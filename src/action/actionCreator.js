export const changeAction = (val)=>({
    type:"TODO_CHANGE",
    value:val
})
export const todoAdd = {
    type:"TODO_ADD"
}
export const todoDel = (val)=>({
    type:"TODO_DEL",
    value:val
})
