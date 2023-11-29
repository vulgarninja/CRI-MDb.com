import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import {useState, useEffect, useContext} from 'react'
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export function Signup ( props ) {
  const[username,setUsername] = useState('')
  const[validusername,setValidusername] = useState(false)
  const[useremail,setUseremail] = useState('')
  const[validemail,setValidemail] = useState(false)
  const[userpassword,setUserpassword] = useState('')
  const[validpassword,setValidpassword] = useState(false)

  const auth = useContext(AuthContext)

  const submitHandler = (evt) => {
    evt.preventDefault()
    props.handler( useremail, userpassword )
  }

  const navigate = useNavigate()

  useEffect( () => {
    if( auth ) {
      // go to home
      navigate("/")
    }
  }, [auth])

  useEffect( () => {
    if( username.length >= 4 ) {
      setValidusername(true)
    }
    else {
      setValidusername(false)
    }
  }, [username] )

  useEffect( () => {
    if( useremail.indexOf('@') > 0 ) {
      setValidemail(true)
    }
    else {
      setValidemail(false)
    }
  }, [useremail])

  useEffect( () => {
    if( userpassword.length >= 8 ) {
      setValidpassword(true)
    }
    else{
      setValidpassword(false)
    }
  }, [userpassword])

  return ( 
    <Container>
      <Row>
        <Col md={ {span: 4, offset: 4} }>
          <Form onSubmit={submitHandler} >
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                name="username" 
                placeholder="username" 
                onChange={ (evt) => setUsername(evt.target.value) }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                placeholder="you@example.com" 
                onChange={ (evt) => setUseremail(evt.target.value) }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                placeholder="minimum 8 characters" 
                onChange={(evt) => setUserpassword(evt.target.value) }
              />
            </Form.Group>
            <Button 
              variant="primary" 
              className="mt-3 w-100" 
              type="submit"
              disabled={ (validemail && validpassword && validusername) ? false : true }
            >
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}