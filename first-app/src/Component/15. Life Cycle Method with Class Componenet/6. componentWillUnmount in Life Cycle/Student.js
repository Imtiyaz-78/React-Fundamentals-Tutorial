

import React from 'react'
class Student extends React.Component{

    componentWillUnmount()
    {
        alert("componentWillUnmount is called")
    }
    render()
    {
        return<h1 style={{color: "skyblue", fontWeight:"bold", fontSize: "50px"}}>Student Component</h1>
    }
}

export default Student
