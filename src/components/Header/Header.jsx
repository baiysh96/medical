import React from 'react';
import img from "../../assets/images/avatar.avif";

const Header = () => {
    return (
        <div>
            <div className="p-5 bg-gray-300">
                <img className="w-9 h-9 rounded-full block ml-auto  "
                     src={img}
                     alt="user"
                />
            </div>
        </div>
    );
};

export default Header;