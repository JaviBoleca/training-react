const initialState = {
  count: 0,
};

const actions = {
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
  DECREMENT_COUNTER: "DECREMENT_COUNTER",
};

const counterReducer = (state, payload) => {
  //   console.log(payload);
  switch (payload.type) {
    case actions.INCREMENT_COUNTER:
      return { count: state.count + 1 };
    case actions.DECREMENT_COUNTER:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export { initialState, actions, counterReducer };
