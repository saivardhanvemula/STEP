// TestimonialPage.js
import React, { useState, useRef } from 'react';
import './FeedBack.css';



const Feedback = () => {
    const FeedBack = [
        {
          name: 'Jane Doe',
          position: 'Software Engineer',
          text: 'STEP has significantly streamlined my travel planning. The integration of food delivery, transportation, and hotel booking all in one place has made it incredibly easy to manage my trips',
        },
        {
          name: 'John Smith',
          position: 'Product Manager',
          text: 'The feature that allows you to connect with friends and plan trips together is a game-changer. It’s so helpful to have everything in one app',
        },
        {
          name: 'Emily Johnson',
          position: 'UX Designer',
          text: 'The customer support for STEP is outstanding. Whenever I’ve had questions or needed assistance, the support team has been quick to respond and very helpful.',
        },
      ];
  const [form, setForm] = useState({ name: '', email: '', experience: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your experience has been shared!');
    setForm({ name: '', email: '', experience: '' }); 
  };

  return (
    <div className="testimonial-page">
      <h2 className='feedback-title'>What Our Clients Say</h2>
      <div className="testimonials">
        {FeedBack.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <h2>{testimonial.name}</h2>
            <h3>{testimonial.position}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>

      

      <div className="experience-form">
        <h2>Share Your Experience</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Your Name:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleFormChange}
                required
              />
            </label>
            <label>
              Your Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleFormChange}
                required
              />
            </label>
          </div>
          <label>
            Your Experience:
            <textarea
              name="experience"
              value={form.experience}
              onChange={handleFormChange}
              rows="4"
              required
            />
          </label>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
