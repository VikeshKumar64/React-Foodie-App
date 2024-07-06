import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import ShimmerUI from "./ShimmerUI";

const ContactUs = () => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <div className={`${!loaded ? 'loading' : ''}`}>
            {!loaded && <ShimmerUI />}
        <div className={`head-m-f-container `}>
            <div className="contact-content" style={{ visibility: loaded ? 'visible' : 'hidden' }}>
                <h1>Contact Us</h1>
                <div className="map-form">
                    <ContactMap onLoad={handleLoad} />
                    <ContactForm />
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;
