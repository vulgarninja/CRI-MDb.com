import { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export function Signout( props ) {
  const nav = useNavigate()

  useEffect(() => {
    props.handler()
    nav("/")
  })

  return(
    <Container>
      <Row>
        <Col>
        {/* Signout */}
        </Col>
      </Row>
    </Container>
  )
}