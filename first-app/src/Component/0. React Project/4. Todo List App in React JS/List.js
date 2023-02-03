
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
/*
const List = (props) => {

    return (
        <>
            <div className='todo_style'>
               
                <i className="fa fa-times" aria-hidden="true" onClick={() => {
                    props.onSelect(props.id)

                }}>

                </i>
                <li> {props.text} </li>
            </div>

        </>
    )
};

export default List;
*/

const List = (props) => {

    const [line, setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    };

    return (

        <div className='todo_style'>
            <span onClick={cutIt}>
                <DeleteIcon className='fa fa-times' />
            </span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}> {props.text}
            </li>
        </div>


    )
};

export default List;
