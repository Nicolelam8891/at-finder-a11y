import './UserPage.css'
import users from '../../mockData/userData'

function UserPage({currentUser, setCurrentUser}) {
    return (
        <h2>{currentUser.name}</h2>

    )
}

export default UserPage