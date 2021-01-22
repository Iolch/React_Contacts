import React, {useState, useEffect} from 'react';

// Import Components
import Label from './Label/Label';
import ContactSocialMedia from './ContactSocialMedia/ContactSocialMedia';

const ContactDetail = (props) => {
    const getPrimaryPhone = () => {
        let primary_number = "No number";
        props.person.phone_numbers.map(function(phone, i){
            if(phone.primary){
                primary_number = phone.number;
            }
        });
        return primary_number;
    }

    const getLocalTime = () => {
        const time = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
        return time;
    }

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            {/* Header of modal */}
            <div className="flex justify-between p-3 border-b-2 border-gray-200 ">
                <div className="md:flex-initial">
                    <p className="text-gray-500 font-bold">Contact Details</p>
                </div>
                <div className="md:flex-initial">
                    <button onClick={props.closeModal}>
                        <svg  className="w-4 h-4 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Body of modal */}
            <div className="p-3">
                <div className="flex flex-col items-center">
                    <div>
                        <img className="h-20 w-full object-cover md:w-20 mt-3 mb-3 rounded-xl" src={props.person.profile_pic} alt="profile picture" />
                    </div>
                    <p className="font-bold capitalize">{props.person.first_name} {props.person.last_name}</p>
                    <p className="text-gray-500 capitalize">{props.person.roles[0]} at <a className="text-indigo-500 font-bold">{props.person.company_name}</a></p>

                    <ContactSocialMedia facebook={props.person.facebook} twitter={props.person.twitter} linkedin={props.person.linkedin} style="border-2 border-gray-200 p-2 ml-3 mr-3 rounded-xl" />
                </div>
                
                {/* Details */}
                <div className="details">
                    <div className="md:flex justify-between">
                        <div className="md:flex-1">
                            <Label title="phone" content={getPrimaryPhone()}/>
                        </div>
                        <div className="md:flex-1">
                            <Label title="local time" content={getLocalTime()}/>
                        </div>
                    </div>
                    <Label title="location" content={props.person.city+", "+props.person.state}/>

                    <p className="text-gray-500 font-bold text-left mt-5 mb-3">Company Info</p>

                    <div className="md:flex justify-between">
                        <div className="md:flex-1">
                            <Label title="industry" content={props.company.industry}/>
                        </div>
                        <div className="md:flex-1">
                            <Label title="location" content={props.company.locality[0]+', '+ props.company.locality[1]}/>
                        </div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="md:flex-1">
                            <Label title="funding" content="$917M"/>
                        </div>
                        <div className="md:flex-1">
                            <Label title="employee count" content={props.person.company_employees}/>
                        </div>
                    </div>

                    <Label title="company description" content={props.company.description}/>

                    <Label title="social media" content="">
                       <ContactSocialMedia facebook={props.company.facebook_url} twitter={props.company.twitter_url} linkedin={props.person.linkedin} style="p-2 ml-3 mr-3" />
                    </Label>
                </div>
            </div>
           
        </div>
    );
};

export default ContactDetail;