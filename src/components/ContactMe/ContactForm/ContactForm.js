// import React from 'react'
// import './ContactForm.css'

// function ContactForm() {
//   return (
//     <div className='contact-form-content'>
//         <form>
//             <div className='name-container'>
//                 <input type='text' name='firstname' placeholder='First Name'/>
//                 <input type='text' name='lastname' placeholder='Last Name'/>
//             </div>
//             <input type='txet' name='email' placeholder='Email'/>
//             <textarea type='text' name='message' placeholder='Message' rows={3}/>
//             <button>SEND</button>
//         </form>
      
//     </div>
//   )
// }

// export default ContactForm

// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import './ContactForm.css';

// function ContactForm() {
//     // State to hold form data
//     const [formData, setFormData] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         message: ''
//     });

//     // Update form data state
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevent default form submission

//         // Use your EmailJS credentials (service ID, template ID, and user ID)
//         emailjs
//             .send(
//                 'service_hv7nq1n',
//                 'template_p8s1qrh',
//                 formData,
//                 'ksnS14pjm7afr59Ax'
//             )
//             .then(
//                 (response) => {
//                   console.log("sent");
//                     console.log('Email sent successfully:', response.status, response.text);
//                     // Optionally, you can show a success message or clear the form
//                     setFormData({
//                         firstname: '',
//                         lastname: '',
//                         email: '',
//                         message: ''
//                     });
//                 },
//                 (error) => {
//                     console.error('Email sending failed:', error);
//                     // Optionally, you can show an error message
//                 }
//             );
//     };

//     return (
//         <div className='contact-form-content'>
//             <form onSubmit={handleSubmit}>
//                 <div className='name-container'>
//                     <input
//                         type='text'
//                         name='firstname'
//                         placeholder='First Name'
//                         value={formData.firstname}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type='text'
//                         name='lastname'
//                         placeholder='Last Name'
//                         value={formData.lastname}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <input
//                     type='email'
//                     name='email'
//                     placeholder='Email'
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//                 <textarea
//                     name='message'
//                     placeholder='Message'
//                     rows={3}
//                     value={formData.message}
//                     onChange={handleChange}
//                 />
//                 <button type='submit'>SEND</button>
//             </form>
//         </div>
//     );
// }

// export default ContactForm;
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm() {
    // State to hold form data
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    });

    // Update form data state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check each field individually for emptiness
        if (!formData.firstname.trim()) {
            alert('First Name is required.');
            return;
        }

        if (!formData.lastname.trim()) {
            alert('Last Name is required.');
            return;
        }

        if (!formData.email.trim()) {
            alert('Email is required.');
            return;
        }

        if (!formData.message.trim()) {
            alert('Message is required.');
            return;
        }

        // Send the email using EmailJS
        emailjs
            .send(
                'service_hv7nq1n',
                'template_p8s1qrh',
                formData,
                'ksnS14pjm7afr59Ax'
            )
            .then(
                (response) => {
                    console.log('Email sent successfully:', response.status, response.text);
                    // Optionally, you can show a success message or clear the form
                    setFormData({
                        firstname: '',
                        lastname: '',
                        email: '',
                        message: ''
                    });
                },
                (error) => {
                    console.error('Email sending failed:', error);
                    // Optionally, you can show an error message
                }
            );
    };

    return (
        <div className='contact-form-content'>
            <form onSubmit={handleSubmit}>
                <div className='name-container'>
                    <input
                        type='text'
                        name='firstname'
                        placeholder='First Name'
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='lastname'
                        placeholder='Last Name'
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name='message'
                    placeholder='Message'
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type='submit'>SEND</button>
            </form>
        </div>
    );
}

export default ContactForm;
