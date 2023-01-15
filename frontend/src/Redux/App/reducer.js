import * as types from './actionTypes'
const initialState = {
  cars: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,action) => {
  const {type,payload} = action;
  switch(type){
    case types.GET_CARS_DATA_REQUEST:{
      return {
        ...state,isLoading:true
      }
    }
    case types.GET_CARS_DATA_SUCCESS:{
      return {
        ...state,isLoading:false,
        watches:payload,
      }
    }
    case types.GET_CARS_DATA_FAILURE:{
      return {
        ...state,isLoading:false,
          isError:true,
      }
    }
    default :return state
  }
  
};

export { reducer };