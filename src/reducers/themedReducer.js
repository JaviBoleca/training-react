const initialState = {
  light: {
    textColor: "#000",
    bgColor: "#f6f8fa",
  },
  dark: {
    textColor: "#fff",
    bgColor: "#222",
  },
};

const actions = {
  LIGHT: "lIGHT",
  DARK: "DARK",
};

const reducer = (state, payload) => {
  switch (payload.type) {
    case actions.LIGHT:
      return (state = initialState.light);
    case actions.DARK:
      return (state = initialState.dark);
    default:
      throw new Error();
  }
};

export { initialState, actions, reducer };
