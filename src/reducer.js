export const initialState = {
  user: null,
  daress: [],
};
// Selector

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_DARES":
      let newDares = [...state.daress];
      newDares.push("hello")
      return {
        ...state,
        daress: newDares,
      };

    default:
      return state;
  }
};

export default reducer;
