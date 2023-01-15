import axios from 'axios'
import * as types from './actionTypes'

const getCars =(query) => (dispatch) =>{
dispatch({type:types.GET_CARS_DATA_REQUEST})
axios.get("https://backend-json-f0af.onrender.coCAR",query)
.then((res)=>{
    dispatch({type:types.GET_CARS_DATA_SUCCESS , payload:res.data})
})
.catch((err)=>{
    dispatch({type:types.GET_CARS_DATA_FAILURE})
})
}

export {getCars}