import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemImage } from "../components/ItemImage"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export function Detail(props) {
  const [bookData, setBookData ] = useState()

  let {id} = useParams()

  useEffect( () => {
    if( !bookData ) {
      props.handler(id).then( (book) => setBookData(book) )
    }
  }, [id])

  if( bookData ) {
    return(
      <Container>
        <Row>
          <Col>
            <h1>{bookData.movie_title}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ItemImage source={bookData.cover_image} />
          </Col>
          <Col md={6}>
            <h2>More information</h2>
            <p>{bookData.synopsis}</p>
            <h3>Starring</h3>
            <p>{bookData.starring.join(', ')}</p>
            <h3>Director</h3>
            <p>{ bookData.director }</p>
            <h3>ISAN Number</h3>
            <p>{ bookData.ISAN }</p>
            <Form>
              <h3>Review this movie</h3>
              <Form.Group>
                <Form.Label>Star</Form.Label>
                <Form.Select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="I love this movie" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Review</Form.Label>
                <Form.Control as="textarea" rows={4} cols={30} placeholder="I could not stop watching!" />
              </Form.Group>
              <Button type="submit" variant="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    )
  }
  else {
    return null
  }
  
}