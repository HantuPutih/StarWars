import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../index.css";

function CharCards({ el }) {
  let history = useHistory();

  function onDetails(url) {
    let cuttedUrl = url.split("people")[1];
    history.push(`/details${cuttedUrl}`);
  }
  return (
    <>
      <Col md={3}>
        <Card style={{ width: "18rem", margin: "1rem" }}>
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <hr />
            <div className={"card-text-flex"}>
              <Card.Text className={"bold-text"}>Birth Year </Card.Text>
              <Card.Text>{el.birth_year}</Card.Text>
            </div>
            <div className={"card-text-flex"}>
              <Card.Text className={"bold-text"}>Eye color </Card.Text>
              <Card.Text>{el.eye_color}</Card.Text>
            </div>
            <Button onClick={() => onDetails(el.url)} variant="primary">
              See more
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CharCards;
