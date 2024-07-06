import React,{useState} from "react";

const ContactMap = ({onLoad}) =>{

    const [loaded,setLoaded] = useState(false);

    const handleLoad = () =>{
        setLoaded(true);
        onLoad();
    }

    return<div>
        <iframe
            src="https://maps.google.com/maps?q=Pune%2C%20Maharashtra%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="500"
            style={{ border: 0, borderRadius: '8px 0px 0px 8px', filter: 'invert(90%)' }}  // This line applies a dark theme effect by inverting colors
            allowFullScreen=""
            loading="lazy"
            title="Map of Pune"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={handleLoad}
        ></iframe>
    </div>
}

export default ContactMap;