//movies
export const setMovies = (payload) => ({
  type: "SETMOVIESLIST",
  payload,
});

export function fetchMovies() {
  return (dispatch) => {
    fetch(`https://swapi.dev/api/films/`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        dispatch(setMovies(data.results));
      })
      .catch((error) => {
        console.log(error, "dari fetchMovies error");
      });
  };
}

//char
export const setCharlist = (payload) => ({
  type: "SETCHARLIST",
  payload,
});

export function fetchChar() {
  return (dispatch) => {
    fetch(`https://swapi.dev/api/people/`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        dispatch(setCharlist(data.results));
      })
      .catch((error) => {
        console.log(error, "dari fetchChar error");
      });
  };
}

//details

export const setDetails = (payload) => ({
  type: "SETDETAILS",
  payload,
});

export function fetchDetails(payload) {
  return (dispatch) => {
    fetch(`https://swapi.dev/api/people/${payload}`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setDetails(data));
      })
      .catch((error) => {
        console.log(error, "dari fetchChar error");
      });
  };
}
