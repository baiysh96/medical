import React from 'react';
import RingLoader from "react-spinners/RingLoader";
import "./Spinner.css"

const Spinner = () => {
    let color = "B8E986"
    return (
        <div className="spinner">
            <RingLoader
                className="my-8"
                color={color} size={110} />
        </div>
    );
};

export default Spinner;