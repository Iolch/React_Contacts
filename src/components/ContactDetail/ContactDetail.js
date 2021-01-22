import React, {useState, useEffect} from 'react';

import './ContactDetail.css';

const ContactDetail = (props) => {
    
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            {/* Header of modal */}
            <div className="md:flex justify-between p-3 border-b-2 border-gray-200 ">
                <div className="md:flex-initial">
                    <p className="text-gray-500 font-bold">Contact Details</p>
                </div>
                <div className="md:flex-initial">
                    <button onClick={props.closeModal}>
                        <svg  className="w-4 h-4 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Body of modal */}
            <div className="p-3">
                <div className="flex flex-col items-center">
                    <img className="h-20 w-full object-cover md:w-20 m-3 rounded-xl" src={props.person.profile_pic} alt="profile picture" />
                    <p className="font-bold capitalize">{props.person.first_name} {props.person.last_name}</p>
                    <p className="text-gray-500 capitalize">{props.person.roles[0]} at {props.person.company_name}</p>

                    <div className="md:flex m-5">

                        <a target='_blank' href={"https://" + props.person.facebook} className="border-2 border-gray-200 p-2 ml-3 mr-3 rounded-xl">
                            <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </a>
                        <a target='_blank' href={"https://" + props.person.twitter} className="border-2 border-gray-200 p-2 ml-3 mr-3 rounded-xl">
                            <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </a>
                        <a target='_blank' href={"https://" + props.person.linkedin} className="border-2 border-gray-200 p-2 ml-3 mr-3 rounded-xl">
                            <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </a>
                    </div>
                </div>

                
            </div>
            {/* <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-40 w-full object-cover md:w-40" src={props.person.profile_pic} alt="profile picture" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.firstname}</div>
                    <p className="mt-2 text-gray-500">{props.email}</p>
                </div>
            </div> */}
        </div>
    );
};

export default ContactDetail;