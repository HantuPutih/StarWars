import React from "react";
import { Card, Button } from "react-bootstrap";

function Cards({ el }) {
  return (
    <>
      <Card style={{ width: "18rem", margin: "1rem" }}>
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <hr />
          <Card.Text>{el.opening_crawl}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
