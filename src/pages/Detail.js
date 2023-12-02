import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemImage } from "../components/ItemImage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Rating from "react-rating-stars-component";
import "../App.css"
export function Detail(props) {
  const [bookData, setBookData ] = useState();

  let {id} = useParams();

  useEffect(() => {
    if (!bookData) {
      props.handler(id).then((book) => setBookData(book));
    }
  }, [id]);

  const openTrailer = () => {
    if (bookData && bookData.youtube_link) {
      window.open(bookData.youtube_link, '_blank');
    } else {
      console.error('YouTube link not available');
    }
  };

  const handleRatingChange = (newRating) => {
    // Handle the logic for submitting the rating to your database
    console.log('New Rating:', newRating);
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
            <h4>Duration</h4>
            <p>{bookData.duration} mins</p>
            <h4>Genre</h4>
            <p>{bookData.genre.join(', ')}</p>
            <Form>
              <h4>Review this movie</h4>
              {/* ... (previous code) */}
              <Button type="submit" variant="dark">Submit</Button>
            </Form>
            <Rating
              count={5}
              onChange={handleRatingChange}
              size={30}
              value={bookData.rating}  // Set the initial rating from your data
              color="#ffd700"
              activeColor="#ffd700"
            />
            <Button variant="dark" onClick={openTrailer} className="trailer-button">
              Trailer
            </Button>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    );
  } else {
    return null;
  }
}
