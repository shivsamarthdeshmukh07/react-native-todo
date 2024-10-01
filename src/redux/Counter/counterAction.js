import { INCREASE_COUNTER,DECREASE_COUNTER } from "./constants";

export const increaseCount =(payload)=>{

   return {
      type : INCREASE_COUNTER,
      payload
   }

}

export const decreaseCount=()=>{
  
    return {
      type : DECREASE_COUNTER
    }
}