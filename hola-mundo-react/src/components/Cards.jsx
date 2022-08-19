const Cards = (props) => {
  return (
  <>
    <img src={props.image} alt="{props.alt}" />
    <h3>{props.title}</h3>
    <h6>{props.description}</h6>

  </>

  )
}

export default Cards;