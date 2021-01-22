import React, {useState, useEffect} from 'react';

const Contact = (props) => {
    
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-40 w-full object-cover md:w-40" src={props.picture} alt="profile picture" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.firstname}</div>
                    <p className="mt-2 text-gray-500">{props.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;