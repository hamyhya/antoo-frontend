const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  dataTopUp: []
}

const transaction = (state=initialState, action) => {
  switch(action.type){
    case 'TOPUP_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'TOPUP_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      }
    }
    case 'TOPUP_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataTopUp: action.payload.data.data
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default transaction