import React from 'react';

const Inputs = ({label,name,type,placeholder,value,error,id,onChange}) => {
    return (
        <>
            <label htmlFor="image">
                {label}
                <input  className=" text-black py-2 px-3 border border-gray-300
                    focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50
                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                   name={name}
                   placeholder={placeholder}
                   value={value}
                   id={id}
                   onChange={onChange}
                   type={type}
                />
            </label>
            {error?<div className="text-red-700">error}</div>:null}
        </>
    );
};

export default Inputs;