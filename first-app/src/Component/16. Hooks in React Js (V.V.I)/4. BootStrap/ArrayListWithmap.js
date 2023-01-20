
import React from 'react'

function ArrayListWithmap() {

    const Imtiyaz = [
        {
            name: "imtiyaz,", Email: "babbaba@gmaul.com", phone: 112212112,

        },

        {
            name: "Developer,", Email: "basdfsffbbaba@gmaul.com", phone: 11266212112,

        },

        {
            name: "Developer,", Email: "ffd@gmaul.com", phone: 112212199512,

        }
    ]


    return (

        <div>

            <h1>Array List</h1>

            <table border="1">

                <tr>
                    <td>Name:</td>
                    <td>Email:</td>
                    <td>Phone:</td>
                </tr>
                {
                    Imtiyaz.map((data) =>
                        // console.log(data)
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.Email}</td>
                            <td>{data.phone}</td>
                        </tr>
                    )
                }
                
            </table>



        </div>
    )
}
export default ArrayListWithmap;


// {
//     for(let i =0; i <Imtiyaz.length; i++){
//         <h1>{Imtiyaz[i]}</h1>
//     }
// }


// return ke under hum kabhi bhi while lopp and for loop use hi nahi kar saktey
// hai ye eror through karta hai because return ke under sab kuchh hai 

// iske liye humlog map function hi use karenege