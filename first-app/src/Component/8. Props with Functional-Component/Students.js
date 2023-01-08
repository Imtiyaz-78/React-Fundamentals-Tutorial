

function Students(Props){
    return(
        <div style={{backgroundColor:"skyblue", margin: 7, borderRadius: 68}}>
            <h1>Hello {Props.name}</h1>
            <h2>Email: {Props.email}</h2>
            <h3>Address: {Props.other.address}</h3>
            

        </div>
    )
}

export default Students;