
import React from 'react'
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

    return (
        <>
            <div className='todo_style'>

                <span>
                    <DeleteIcon className='fa fa-times' onClick={() => {
                        props.onSelect(props.id)
                    }}>

                    </DeleteIcon>
                </span>



                <li> {props.text} </li>
            </div>

        </>
    )
};

export default List;
