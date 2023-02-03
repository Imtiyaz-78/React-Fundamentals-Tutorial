import React, { useState } from 'react'
import todo from './todo.css'
import List from './List';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const TodoList = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);


    const ItemEvents = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });


        setInputList(""); // yeha par data set hone ke baad array ko empty kr rahe means input ko

    };


    const deleteItem = (id) => {
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;

            });
        });

    };


    return (
        <>
            <div className='container'>
                <div className='Todo_card'><br />
                    <h1 className='heading'>Todo List App</h1>
                    <input type="text" className='inputs' placeholder='Add a Items' onChange={ItemEvents} value={inputList} />

                    <Button className='btn' onClick={listOfItems} variant="contained" > <AddIcon /></Button>

                    <ol className='list'>

                        {
                            items.map((itemsvalue, index) => {
                                return <List text={itemsvalue} // text is props
                                    key={index}
                                    id={index}
                                    onSelect={deleteItem}

                                />
                            })
                        }

                    </ol>


                </div>

            </div>

        </>
    )
}

export default TodoList


//map function mein ----> (value, index) hota hai