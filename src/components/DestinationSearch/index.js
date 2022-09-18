import {Component} from 'react'
import listProfile from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangesearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchedInput = destinationsList.filter(eachDestination =>
      eachDestination.name
        .tolowercase()
        .includes(searchInput.name.tolowercase()),
    )

    return (
      <div className="mainbg">
        <h1 className="h">Destination Search</h1>
        <input
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={this.onChangesearch}
        />
        <ul className="listscontainer">
          {searchedInput.map(eachList => (
            <listProfile key={eachList.id} listDetails={eachList} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
