import React from 'react';
import RingLoader from "react-spinners/RingLoader";
import "./Spinner.css"

const Spinner = () => {
    return (
        <div className="spinner">
            <RingLoader
                className="my-8"
                color="B8E986"  size={110} />
        </div>
    );
};

export default Spinner;