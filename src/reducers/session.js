const initialState = {
  user: null,
  errorMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: {
          name: action.payload.username,
        },
        errorMsg: '',
      };
    case 'Log_OUT':
      return {
        ...state,
        user: null,
        errorMsg: '',
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
};
