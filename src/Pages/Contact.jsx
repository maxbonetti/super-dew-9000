import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            // Form is valid, submit the data
            alert('Form submitted');
        }
    };

    return (
        <section className="container my-5">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    );
};

export default Contact;