const initialState = {
  movieList: [],
  charList: [],
  details: {},
};

export default function movieReducers(state = initialState, { type, payload }) {
  switch (type) {
    case "SETMOVIESLIST":
      return { ...state, movieList: payload };
    case "SETCHARLIST":
      return { ...state, charList: payload };
    case "SETDETAILS":
      return { ...state, details: payload };
    default:
      return state;
  }
}
