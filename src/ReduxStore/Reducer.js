export var AuthReducer = function (
  state = {
    userLoggedIn: localStorage.token ? true : false,
  },
  action
) {
  console.log("ooooooooooooooooo");
  switch (action.type) {
    case "LOGIN": {
      state = { ...state };
      state["userLoggedIn"] = true;
      state["user"] = action.payload;
      console.log(">>>>>>>>>>>>>>>>>>>>", state);
      return state;
    }
    default:
      return state;
  }
};
