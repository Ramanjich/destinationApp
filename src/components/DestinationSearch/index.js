import DestinationItem from '../DestinationItem'

import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props

  let value

  const onChangeInput = event => {
    value = event.target.value
    return value
  }

  const searchResults = destinationsList.filter(eachList =>
    eachList.name.includes(value),
  )

  return (
    <div className="container">
      <h1>Destination Search</h1>
      <div className="searchContainer">
        <input type="search" onChange={onChangeInput} value={value} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="icon"
        />
      </div>

      <ul className="cards">
        {searchResults.map(eachlist => (
          <DestinationItem items={eachlist} key={eachlist.id} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
