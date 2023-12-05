import { useState, useEffect, useContext } from 'react'
import { FSContext } from '../contexts/FSContext'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { collection, query, onSnapshot } from 'firebase/firestore'
import "../App.css"

export function Reviews ( props ) {
  const db = useContext( FSContext )

  const[ reviews, setReviews ] = useState([])
  const[ fetching, setFetching ] = useState( true )

  useEffect( () => {
    if( fetching ) {
      const q = query( collection( db, `movies/${props.bookId}/reviews`))
      const snapshot = onSnapshot( q, (snapshot) => {
        let bookReviews = []
        snapshot.forEach( (item) => {
          let r = item.data()
          r.id = item.id
          bookReviews.push(r)
        })
        setReviews( bookReviews)
        setFetching(false)
      })
    }
  })

  const ReviewItems = reviews.map( (item) => {
    return (
      <Container className="UserReview" style={{padding: 20, margin: 10}}>
      <Row>
        <Col>
          <h5>{item.title}</h5>
          <strong>Rated {item.star} stars!</strong><br/>
          <em>{item.body}</em>
        </Col>
      </Row>
      </Container>
    )
  })

  return(
    <Container className="UserReview">
      { ReviewItems }
    </Container>
  )
}