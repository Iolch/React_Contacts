import React, {useState, useEffect} from 'react';

import './Contact.css';

const Contact = (props) => {
    
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <img class="h-40 w-full object-cover md:w-40" src="https://res.cloudinary.com/rubyco/image/twitter_name/jonoringer.jpg" alt="profile picture" />
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.firstname}</div>
                    <p class="mt-2 text-gray-500">{props.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;