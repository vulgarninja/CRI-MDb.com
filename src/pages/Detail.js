import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemImage } from "../components/ItemImage";
import Button from "react-bootstrap/Button";
import "../App.css"
import { ReviewForm } from "../components/ReviewForm"
import { Reviews } from "../components/Reviews"

export function Detail(props) {
  const [bookData, setBookData ] = useState();

  let {id} = useParams();

  useEffect(() => {
    if (!bookData) {
      props.handler(id).then((book) => setBookData(book));
    }
  }, [id]);

  const styles = {
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      height: 200,
      width: 500,
      padding: 10
    },

    button: {
      padding: 10,
      margin: '20px 0'
    }
  }

  const openTrailer = () => {
    if (bookData && bookData.youtube_link) {
      window.open(bookData.youtube_link, '_blank');
    } else {
      console.error('YouTube link not available');
    }
  };

  if (bookData) {
    return (
      <Container style={{ paddingTop: '20px'}}>
        <Row>
          <Col>
            <h1>{bookData.movie_title} ({bookData.year})</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ItemImage source={bookData.cover_image} />
            <em>"{bookData.tagline}"</em>
          </Col>
          <Col md={6}>
            <h2>More information</h2>
            <p>{bookData.synopsis}</p>
            <h4>Starring</h4>
            <p>{bookData.starring.join(', ')}</p>
            <h4>Director</h4>
            <p>{bookData.director}</p>
            <h4>ISAN Number</h4>
            <p>{bookData.ISAN}</p>
            <Container style={{padding: 0}}className="splitInfo">
            <Col>
            <h4>Duration</h4>
            <p>{bookData.duration} mins</p>
            </Col>
            <Col>
            <h4>Genre</h4>
            <p>{bookData.genre.join(', ')}</p>
            </Col>
            </Container>
            <Row>
              <Col>
                <ReviewForm booktitle={bookData.movie_title} bookId={bookData.id} />
              </Col>
            </Row>
            {/* Trailer Button */}
            <Button variant="dark" style={styles.button} onClick={openTrailer} className="trailer-button">
              Watch Trailer
            </Button>
          </Col>
        </Row>
        <Reviews bookId={bookData.id}  />
      </Container>
    );
  } else {
    return null;
  }
}
