import { useState, useEffect, useContext } from 'react'
import { StorageContext } from '../contexts/StorageContext'
import { ref, getDownloadURL } from 'firebase/storage'
import Card from 'react-bootstrap/Card'

export function ItemImage ( props ) {
  const [image,setImage] = useState()

  const storage = useContext( StorageContext)

  useEffect( () => {
    if( props.source ) {
      const imgref = ref( storage, `cover_images/${props.source}`)
      getDownloadURL( imgref )
      .then( (url) => setImage(url) )
      .catch( err => console.log(err) )
    }
  }, [props.source] )

  if(!image) {
    const defstyle={
      backgroundColor: "#cccccc",
      aspectRatio: "4/6"
    }
    return (
      <div style={defstyle}>
      </div>
    )
  }
  else {
    return (
      <Card.Img style={{aspectRatio: "4/6"}} variant='top' src={image} />
    )
  }
}