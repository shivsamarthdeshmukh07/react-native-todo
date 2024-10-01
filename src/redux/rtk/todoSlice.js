import { createSlice,nanoid } from '@reduxjs/toolkit'


const initialState={
    arr:[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state=initialState,action)=>{
            state.arr.push({id:nanoid(),...action.payload})
            
        },
        updateTodo:(state,action)=>{
         state.arr.forEach((item, idx)=>{
                if(item.id === action.payload.id){
                   state.arr.splice(idx, 1,action.payload)
                }
            })
        },
        deleteTodo:(state,action)=>{
            state.arr.forEach((item, index)=>{
                if(item.id === action.payload){
                   state.arr.splice(index, 1)
                }
            }) 
        }

    }
})

export default todoSlice.reducer

export const {addTodo,updateTodo,deleteTodo} = todoSlice.actions


