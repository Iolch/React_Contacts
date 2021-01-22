import React, {useState, useEffect} from 'react';

import './Label.css';

const Label = (props) => {
    
    return (
        <div className="mb-3">
            <p className="text-gray-500 text-sm capitalize text-left">{props.title}</p>
            <p className="font-bold text-justify">{props.content}</p>
            {props.children}
        </div>
    );
};

export default Label;