

function Students(props) {

    console.log(props);
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>Hi {props.name}</h1>
        </div>
    )
}

export default Students;