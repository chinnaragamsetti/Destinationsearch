// Write your code here
import './index.css'

const listProfile = props => {
  const {listDetails} = props
  const {imgUrl, name} = listDetails

  return (
    <li className="listcontianer">
      <img src={imgUrl} className="image" alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default listProfile
