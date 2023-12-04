import React, { useContext, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../contexts/AuthContext";
import { FSContext } from "../contexts/FSContext";
import { collection, addDoc } from "firebase/firestore";
import StarRating from "../components/StarRating";

export function ReviewForm(props) {
  const auth = useContext(AuthContext);
  const db = useContext(FSContext);

  const [star, setStar] = useState("5");
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (title.length > 3 && review.length > 4) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [star, title, review]);

  const submitHandler = async (event) => {
    event.preventDefault();
    const userReview = { title: title, star: star, body: review };
    const col = collection(db, `movies/${props.bookId}/reviews`);
    const ref = await addDoc(col, userReview);
    console.log(ref);
  };

  console.log("stars", star);

  if (auth) {
    return (
      <Form onSubmit={submitHandler} className="my-4">
        <h3>Review {props.movie_title}</h3>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Review Title"
            name="title"
            onChange={(evt) => setTitle(evt.target.value)}
          />
        </Form.Group>
        <Form.Group>
          {/* My Component */}
          <StarRating onRatingChange={(value) => setStar(value)} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={4}
            cols={30}
            placeholder="Write a Review!"
            name="content"
            onChange={(evt) => setReview(evt.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          variant="dark"
          className="mt-2"
          disabled={valid ? false : true}
        >
          Submit Review
        </Button>
      </Form>
    );
  } else {
    return null;
  }
}
