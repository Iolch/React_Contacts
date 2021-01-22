import React from 'react';

// import './Label.css';

const ContactSocialMedia = (props) => {
    
    return (
        <div className="flex mt-5 mb-5 items-center">

            <a target='_blank' href={"https://" + props.facebook} className={props.style}>
                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                aria-describedby="desc" role="img">
                    <title>Facebook</title>
                    <desc>A line styled icon from Orion Icon Library.</desc>
                    <path data-name="layer1"
                    d="M39.312 13.437H47V2h-9.094C26.938 2.469 24.688 8.656 24.5 15.125v5.719H17V32h7.5v30h11.25V32h9.281l1.781-11.156H35.75v-3.469a3.714 3.714 0 0 1 3.562-3.938z"
                    fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit="10"
                    strokeWidth="2" strokeLinejoin="round"></path>
                </svg>
            </a>
            <a target='_blank' href={"https://" + props.twitter} className={props.style}>
                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                aria-describedby="desc" role="img">
                    <title>Twitter</title>
                    <desc>A line styled icon from Orion Icon Library.</desc>
                    <path data-name="layer1"
                    d="M60.448 15.109a24.276 24.276 0 0 1-3.288.968.5.5 0 0 1-.451-.853 15.146 15.146 0 0 0 3.119-4.263.5.5 0 0 0-.677-.662 18.6 18.6 0 0 1-6.527 2.071 12.92 12.92 0 0 0-9-3.75A12.363 12.363 0 0 0 31.25 20.994a12.727 12.727 0 0 0 .281 2.719c-9.048-.274-19.61-4.647-25.781-12.249a.5.5 0 0 0-.83.073 12.475 12.475 0 0 0 2.956 14.79.5.5 0 0 1-.344.887 7.749 7.749 0 0 1-3.1-.8.5.5 0 0 0-.725.477 11.653 11.653 0 0 0 7.979 10.567.5.5 0 0 1-.09.964 12.567 12.567 0 0 1-2.834 0 .506.506 0 0 0-.536.635c.849 3.282 5.092 7.125 9.839 7.652a.5.5 0 0 1 .267.87 20.943 20.943 0 0 1-14 4.577.5.5 0 0 0-.255.942 37.29 37.29 0 0 0 17.33 4.266 34.5 34.5 0 0 0 34.687-36.182v-.469a21.11 21.11 0 0 0 4.934-4.839.5.5 0 0 0-.58-.765z"
                    fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit="10"
                    strokeWidth="2" strokeLinejoin="round"></path>
                </svg>
            </a>
            <a target='_blank' href={"https://" + props.linkedin} className={props.style}>
                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                aria-describedby="desc" role="img">
                    <title>Linkedin</title>
                    <desc>A line styled icon from Orion Icon Library.</desc>
                    <path data-name="layer1"
                    fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit="10"
                    strokeWidth="2" d="M3.078 22.331h12.188v36.844H3.078z" strokeLinejoin="round"></path>
                    <path data-name="layer2" d="M46.719 21.112c-5.344 0-8.531 1.969-11.906 6.281v-5.062H22.625v36.844h12.281V39.206c0-4.219 2.156-8.344 7.031-8.344s7.781 4.125 7.781 8.25v20.063H62V38.269c0-14.532-9.844-17.157-15.281-17.157z"
                    fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit="10"
                    strokeWidth="2" strokeLinejoin="round"></path>
                    <path data-name="layer1" d="M9.219 4.425C5.188 4.425 2 7.331 2 10.894s3.188 6.469 7.219 6.469 7.219-2.906 7.219-6.469-3.188-6.469-7.219-6.469z"
                    fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit="10"
                    strokeWidth="2" strokeLinejoin="round"></path>
                </svg>
            </a>
        </div>
    );
};

export default ContactSocialMedia;