import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init();
    return () => AOS.refresh(); // Cleanup
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect form data and handle submission logic
    console.log("Form submitted");
  };

  return (
    <div id="contact" className="mt-10 mb-10 w-full md:max-w-7xl md:mx-auto bg-base-200 rounded-2xl p-10">
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
        <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-duration="1000">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Phone */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  id="name"
                  className="input input-bordered w-full"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  id="number"
                  className="input input-bordered w-full"
                  type="tel"
                  name="number"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            
            {/* Email & Subject */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  id="email"
                  className="input input-bordered w-full"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  id="subject"
                  className="input input-bordered w-full"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
            </div>
            
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="textarea textarea-secondary w-full h-32"
                required
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-[#FF014F] text-white w-full sm:w-auto px-6 hover:bg-[#e01344]"
            >
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}