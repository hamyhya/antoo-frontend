const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  dataPromo: [],
}

const promo = (state=initialState, action) => {
  switch(action.type){
    case 'GETPROMO_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GETPROMO_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      }
    }
    case 'GETPROMO_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataPromo: action.payload.data.data
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default promo