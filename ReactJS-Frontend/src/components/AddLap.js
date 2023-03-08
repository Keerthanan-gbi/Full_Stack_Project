import React, { useState, useEffect } from "react";
import './AddLap.css';

import { Link, useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
import lapService from "../services/lap.service";

const AddLap = () => {
    const[lapname, setLapname] = useState('');
    const[year, setYear] = useState('');
    const[price, setPrice] = useState('');
    const[ram, setRam] = useState('');
    const[storage, setStorage] = useState('');
    const[processor, setProcessor] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const saveLap = (e) => {
        e.preventDefault();
       
        const lap = {lapname, year, price, ram, storage, processor, id };
        if (id) {
            //update
            lapService.update(lap)
                .then(response => {
                    console.log('Lap data updated successfully', response.data);
                    navigate.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            //create
            lapService.create(lap)
            .then(response => {
                console.log("Lap added successfully", response.data);
                navigate.push("/");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            lapService.get(id)
                .then(lap => {
                    setLapname(lap.data.lapname);
                    setYear(lap.data.year);
                    setPrice(lap.data.price);
                    setRam(lap.data.ram);
                    setStorage(lap.data.storage);
                    setProcessor(lap.data.processor);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3><b><i>Add Laptop</i></b></h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lapname"
                        value={lapname}
                        onChange={(e) => setLapname(e.target.value)}
                        placeholder="Enter Lapname"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Enter Year"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="prcie"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter Price" 
                    />
                </div>
                <div >

                <div className="form-group">
                <input
                    type="text"
                    className="form-control col-4"
                    id="ram"
                    value={ram}
                    onChange={(e) => setRam(e.target.value)}
                    placeholder="Enter Ram"
                />

            </div>

            <div className="form-group">
            <input
                type="text"
                className="form-control col-4"
                id="storage"
                value={storage}
                onChange={(e) => setStorage(e.target.value)}
                placeholder="Enter Storage"
            />
        </div>

        <div className="form-group">
        <input
            type="text"
            className="form-control col-4"
            id="processor"
            value={processor}
            onChange={(e) => setProcessor(e.target.value)}
            placeholder="Enter Processor"
        />

    </div>

                    <button onClick={(e) => saveLap(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/"><b><u><i>🔙 Back to List</i></u></b></Link>
        </div>
    )
}

export default AddLap;
