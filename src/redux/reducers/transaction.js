const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  dataTopUp: [],
  dataTransfer: [],
  dataPln: [],
  dataHistory: [],
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
    case 'TRANSFER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'TRANSFER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.msg,
      }
    }
    case 'TRANSFER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataTransfer: action.payload.data.data
      }
    }
    case 'PLN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'PLN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.msg,
      }
    }
    case 'PLN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataPln: action.payload.data.data
      }
    }
    case 'HISTORY_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'HISTORY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.msg,
      }
    }
    case 'HISTORY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataHistory: action.payload.data.data
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        dataTopUp: [],
        dataTransfer: [],
        dataPln: [],
        dataHistory: [],
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