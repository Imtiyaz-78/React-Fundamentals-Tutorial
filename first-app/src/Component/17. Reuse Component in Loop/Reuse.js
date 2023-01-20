
import React from 'react'
import User from './User';





function Reuse() {


    const Mom = [
        { name: "Imtiyaz", email: "imtiyazmd803@gmail.com", contact: 1212121 },
        { name: "Mustak", email: "Mustak@gmail.com", contact: 665533 },
        { name: "Mumtaz", email: "Mumtaz@gmail.com", contact: 332244 },
        { name: "Mom", email: "Mom@gmail.com", contact: 66666 },
    ]




    return (
        <div>


            <h1>Reuser Component with List</h1>

            {
                Mom.map((item, i) =>
                    <User data={item} />

                )
            }


        </div >
    );
}
export default Reuse