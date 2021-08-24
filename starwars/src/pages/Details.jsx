import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../store/actions";
import { Container } from "react-bootstrap";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.reducers.details);

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);
  return (
    <>
      <Container>
        <h1>Details</h1>
        <h3>Name</h3>
        <p>{details.name}</p>
        <hr />
        <h3>Height</h3>
        <p>{details.height}</p>
        <hr />
        <h3>Hair Color</h3>
        <p>{details.hair_color}</p>
        <hr />
        <h3>Eye Color</h3>
        <p>{details.eye_color}</p>
        <hr />
        <h3>Birth year</h3>
        <p>{details.birth_year}</p>
        <hr />
        <h3>Gender</h3>
        <p>{details.gender}</p>
        <hr />
        {/* untuk lihat return api */}
        {/* {JSON.stringify(details)} */}
      </Container>
    </>
  );
}

export default Details;
