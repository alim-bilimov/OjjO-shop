const initialState = {
  count: 1,
};

export const CountRedusers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNT":
      return { ...state, count: action.payload };

    default:
      return state;
  }
};
