
import Users from "./Users.css"

function User(Props) {

    function Handeler(){
        alert("hey Dear")
    }
    return (
        <div className="Spann">

            <span>{Props.data.name}</span>
            <span>{Props.data.email}</span>
            <button className="btn" onClick={Handeler}> <span>Hello{Props.data.address}</span></button>
        </div>
    )
}

export default User;