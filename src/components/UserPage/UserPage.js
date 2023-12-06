import './UserPage.css'
import users from '../../mockData/userData'

function UserPage({currentUser, setCurrentUser}) {
    console.log("currentUser:=====", currentUser);
    if (!currentUser) {
        return <div>No user available.</div>
    }
    return (
        <div>
            <h2 className='welcome-user'>Welcome to your page, {currentUser.name}! </h2>
            <p>Below are your comments and favorite items.</p>
        </div>
    )
}

export default UserPage

