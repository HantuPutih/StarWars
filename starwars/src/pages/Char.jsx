import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import CharCards from "../components/CharCards";
import { fetchChar } from "../store/actions";

function Char() {
  const dispatch = useDispatch();
  const charList = useSelector((state) => state.reducers.charList);
  useEffect(() => {
    dispatch(fetchChar());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Row>
          {charList
            ? charList.map((el, idx) => {
                return <CharCards key={idx} el={el} />;
              })
            : "loading"}
        </Row>
      </Container>
    </>
  );
}

export default Char;
