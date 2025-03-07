import React from 'react';

export default function Contact() {
  return (
    <div className='mt-10 mb-10 max-w-7xl mx-auto bg-base-200 rounded-2xl h-[500px] p-10'>
      <div className="flex justify-between items-center gap-10">
        {/* text */}
        <div className="w-1/2">
          <h4 className="text-lg font-semibold text-[#FF014F]">GET IN TOUCH</h4>
          <h1 className="text-3xl font-bold">Elevate your brand with Me</h1>
          <p className="mt-2 text-gray-600">I specialize in creating user-friendly, modern, and impactful designs that help brands stand out.Feel free to reach out for inquiries, collaborations, or just a friendly chat!</p>

        </div>
        
        {/* input field */}
        <div className="w-1/2 space-y-4 mt-20">
          {/* name & phone */}
          <div className="flex gap-5">
            <input className='input input-bordered w-full' type="text" name="name" placeholder='Your Name' />
            <input className='input input-bordered w-full' type="number" name="number" placeholder='Phone Number' />
          </div>
          
          {/* email & subject */}
          <div className="flex gap-5">
            <input className='input input-bordered w-full' type="email" name="email" placeholder='Your Email' />
            <input className='input input-bordered w-full' type="text" name="subject" placeholder='Subject' />
          </div>
          
          {/* message */}
          <textarea 
            placeholder="Your Message" 
            className="textarea textarea-secondary w-full h-32"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
