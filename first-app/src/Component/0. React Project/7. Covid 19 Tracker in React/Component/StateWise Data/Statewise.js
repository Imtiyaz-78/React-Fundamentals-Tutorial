import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getcovidData = async () => {
        const response = await fetch(`https://data.covid19india.org/data.json`);
        const actuadata = await response.json();
        console.log(actuadata.statewise);
        setData(actuadata.statewise);
    }

    useEffect(() => {
        getcovidData();
    }, []);

    return (
        <>


            <div className="conatainer-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA COVID-19 Dashboard</span></h1>
                </div>

                <div className="table-responsive">
                    <Table className="table table-hover" variant="white" striped bordered hover>
                        <thead className="thead-dark">
                            <tr className="table-primary">
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>

                       
                        <tbody>
                            {
                                data.map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th>{curElem.state}</th>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>

                                    )
                                })
                            }

                        </tbody>

                    </Table>

                </div>
            </div>
        </>
    )
}

export default Statewise;