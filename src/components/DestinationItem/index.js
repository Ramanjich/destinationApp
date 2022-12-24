import './index.css'

const DestinationItem = props => {
  const {items} = props
  const {name, imgUrl} = items

  return (
    <li className="destinationCard">
      <img src={imgUrl} alt="oops" className="images" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
