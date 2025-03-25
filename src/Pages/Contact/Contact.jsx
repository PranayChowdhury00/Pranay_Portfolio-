import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id='contact' className='mt-10 mb-10 max-w-7xl mx-auto bg-base-200 rounded-2xl p-10'>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1000">
          <h4 className="text-lg font-semibold text-[#FF014F]">GET IN TOUCH</h4>
          <h1 className="text-3xl font-bold">Elevate your brand with Me</h1>
          <p className="mt-2 text-gray-600">
            I specialize in creating user-friendly, modern, and impactful designs that help brands stand out.
            Feel free to reach out for inquiries, collaborations, or just a friendly chat!
          </p>
        </div>
        
        {/* Input Fields */}
        <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left" data-aos-duration="1000">
          {/* Name & Phone */}
          <div className="flex flex-col sm:flex-row gap-5">
            <input className='input input-bordered w-full' type="text" name="name" placeholder='Your Name' />
            <input className='input input-bordered w-full' type="number" name="number" placeholder='Phone Number' />
          </div>
          
          {/* Email & Subject */}
          <div className="flex flex-col sm:flex-row gap-5">
            <input className='input input-bordered w-full' type="email" name="email" placeholder='Your Email' />
            <input className='input input-bordered w-full' type="text" name="subject" placeholder='Subject' />
          </div>
          
          {/* Message */}
          <textarea 
            placeholder="Your Message" 
            className="textarea textarea-secondary w-full h-32"
          ></textarea>
          
          {/* Submit Button */}
          <button className="btn bg-[#FF014F] text-white w-full sm:w-auto px-6">
            Send Message
          </button>
        </div>
        
      </div>
    </div>
  );
}
