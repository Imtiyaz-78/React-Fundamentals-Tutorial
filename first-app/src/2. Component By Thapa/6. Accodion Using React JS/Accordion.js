import React, { useState } from 'react';
import { questions } from './api';
import accordion from './accordion.css';
import MyAccordion from './MyAccordion';

const Accordion = () => {

    const [data, setData] = useState(questions);
    return (
        <>
            {
                data.map((items) => {
                    const {id, question, answer} = items;
                    return <MyAccordion key={id} {...items}/>;

                })
            }
        </>
    )
}

export default Accordion
