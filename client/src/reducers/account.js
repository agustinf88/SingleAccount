const initialState = {
  name: "",
  balance: 0,
  movements: [{ date: Date(), value: 10 }],
  snackbar: {
    open: false,
    description: ""
  }
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVEMENT_SUCCESS":
      return {
        ...state,
        movements: [{ ...action.payload }, ...state.movements]
      };

    case "FETCH_ACCOUNT_SUCCESS":
      return {
        ...state,
        name: action.payload.name,
        balance: action.payload.balance,
        movements: action.payload.movements
      };

    case "FORBIDDEN_MOVEMENT":
      return {
        ...state,
        snackbar: { open: true, description: action.payload }
      };

    case "CLOSE_SNACKBAR":
      return {
        ...state,
        snackbar: { open: false, description: "" }
      };

    case "GET_BALANCE_SUCCESS":
      return {
        ...state,
        balance: action.payload
      };

    default:
      return state;
  }
};

export default accountReducer;
