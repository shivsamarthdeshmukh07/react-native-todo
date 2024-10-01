import { INCREASE_COUNTER,DECREASE_COUNTER } from "./constants";


const initialState ={
    counter :0
}

 export default counterReducer = (state = initialState,action)=>{
    switch(action.type){
        case INCREASE_COUNTER: return{
            ...state,
             counter : state.counter + action.payload
        }

        case DECREASE_COUNTER :return{
            ...state,
             counter : state.counter - 1,
        }

        default: return state
    }
 }