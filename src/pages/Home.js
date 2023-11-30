import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

import { useState, useEffect } from 'react';
import { ItemImage } from "../components/ItemImage";

export function Home(props) {
  const [books, setBooks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!books) {
      props.handler(id).then((books) => setBooks(books));
    }
  }, [id, books, props.handler]);

  const openTrailer = (youtubeLink) => {
    if (youtubeLink) {
      window.open(youtubeLink, '_blank');
    } else {
      console.error('YouTube link not available');
    }
  };

  useEffect(() => {
    console.log(props.items);
    setBooks(props.items);
  }, [props.items]);

  const ItemCards = books.map((book, itemkey) => {
    const itemLink = `detail/${book.id}`;
    return (
      <Col md={3} className="mb-4" key={itemkey}>
        <Card key={itemkey} className="position-relative">
          <a href={itemLink} className="position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 80 }}></a>
          <ItemImage source={book.cover_image} />
          <Card.Body>
            <Card.Title>{book.movie_title}</Card.Title>
            <Button variant="dark" onClick={() => openTrailer(book.youtube_link)} className="trailer-button">
              Watch Trailer
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Container style={{ paddingTop: '20px'}}>
      <Row>{ItemCards}</Row>
    </Container>
  );
}
