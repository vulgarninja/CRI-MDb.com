import Container from "react-bootstrap/Container"
import tonySoprano from "../images/Tony-Soprano.jpg"

export function About ( props ) {
  return ( 
  <Container className="AboutContainer">
    <h1>The Ultimate Crime Movie Database</h1>
    <p> Hey, listen up! Welcome to "CRI-MDb" (Crime-DB) – where the wise guys and made men come to get their dose of cinematic thrill. I've always been a fan of a good story, especially when it's got a bit of that family drama, some backstabbing, and a whole lot of action. That's why I put together CRI-MDb – the go-to spot for movie lovers in the life.

At CRI-MDb, we got the classics that'll make you an offer you can't refuse – think "The Godfather," "Goodfellas," and "Casino." But we're not stuck in the past. We've got the latest hits that capture the pulse of the streets today.

And it's not just about watching. We've got a place for you to sound off, rate, and discuss your favorite mob movies. So, whether you're into power plays, turf wars, or just some good old-fashioned wiseguy antics, CRI-MDb has got you covered.

Grab a cannoli, kick back, and immerse yourself in a world where loyalty is everything, and betrayal is just part of the game. CRI-MDb – because sometimes, you just need a front-row seat to the real action. Enjoy the show, capisce?</p>

<img src={tonySoprano} className="tonySoprano" alt="A Picture of Tony Soprano sitting on a couch with a cigar"/>
</Container>
  )
}