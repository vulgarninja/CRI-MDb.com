export function About ( props ) {
  return ( 
  <div>
    <h1>{ props.greeting }</h1>
    <button onClick={ () => props.handler("I've been clicked!") } >Click me</button>
  </div>
  )
}