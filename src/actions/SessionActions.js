const checkCredentials = (params) => {
  if (
    params.username.toLowerCase() !== 'admin'
    || params.password !== '12345'
  ) {
    return false;
  }
  return true;
};

export const logIn = (params, cb) => async (dispatch) => {
  if (checkCredentials(params)) {
    dispatch({
      type: 'LOG_IN',
      payload: {
        name: params.name,
      },
    });
    cb();
  } else {
    dispatch({
      type: 'LOG_IN_FAILURE',
      payload: {
        errorMsg: 'Имя пользователя или пароль введены не верно',
      },
      error: true, // https://github.com/redux-utilities/flux-standard-action
    });
  }
};

export const logOut = () => ({
  type: 'LOG_OUT',
});
