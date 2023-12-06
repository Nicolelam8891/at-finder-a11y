import './UserPage.css'
import users from '../../mockData/userData'



function UserPage({currentUser, setCurrentUser}) {
    console.log("currentUser:=====", currentUser);
    if (!currentUser) {
        return <div>No user available.</div>
    }
    return (
        <div>
        Welcome <h2>{currentUser.name} </h2>
        </div>
    )
}

export default UserPage

