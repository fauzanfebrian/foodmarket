const initGlobalState = {
  isError: false,
  isLoading: false,
  message: 'Error',
};

export const globalReducer = (state = initGlobalState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.value.isError,
        message: action.value.message,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    default:
      return state;
  }
};
