const initialState = {
  isLoading: false,
  isLogin: false,
  isError: false,
  errorMsg: '',
  token: null,
  dataLogin: [],
  balance: 0,
  userDetail: []
}

const auth = (state=initialState, action) => {
  switch(action.type){
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      }
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
        token: action.payload.data.data.token,
        dataLogin: action.payload.data.data
      }
    }
    case 'REGISTER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.msg,
      }
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      }
    }
    case 'USERID_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'USERID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.msg,
      }
    }
    case 'USERID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        balance: action.payload.data.data[0].balance,
        userDetail: action.payload.data.data[0],
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        isError: false,
        token: null,
        dataLogin: [],
        dataUserId: []
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default auth