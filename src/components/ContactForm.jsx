import React,{useState} from "react";

const ContactForm = () =>{

    const [formData,setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }
    
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }
    return <div className="contact-form-container">
        {submitted ? (
            <div className="confirmation-message">
                <h2>Thank you for contacting us!</h2>
                <p>We will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)}>Send Another Message</button>
            </div>
        ) : (
            <form  className="contact-form" onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter You Name"/>
            </label>
            <label>
                Email: 
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="xyz@gmail.com"/>
            </label>
            <label>
                Message: 
                <textarea type="text" name="message" value={formData.message} onChange={handleChange} required placeholder="Write your query here"/>
            </label>
            <button type="submit">Submit</button>
        </form>
        )}
    </div>
}

export default ContactForm;