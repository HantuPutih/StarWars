import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions";
import { Container, Row } from "react-bootstrap";

function Movie() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.reducers.movieList);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Row>
          {movieList
            ? movieList.map((el, index) => {
                return <Cards el={el} key={index}></Cards>;
              })
            : "Loading..."}
        </Row>
      </Container>
    </>
  );
}

export default Movie;
