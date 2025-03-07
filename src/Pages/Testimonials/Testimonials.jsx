import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    message:
      "Working with you was a fantastic experience! Your attention to detail and commitment to delivering high-quality work really stands out. Keep it up!",
    rating: 5,
    imgSrc: "https://i.ibb.co.com/2fXWJYZ/360-F-243123463-z-Tooub557x-EWABDLk0j-Jkl-Dy-LSGl2jrr.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    message:
      "Amazing work! You exceeded my expectations, and I couldn't be happier with the results. Highly recommend your services to anyone!",
    rating: 5,
    imgSrc: "https://i.ibb.co.com/3yRzg3nD/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    message:
      "A true professional! You tackled every challenge with ease and delivered on time. The final product was beyond what I imagined.",
    rating: 5,
    imgSrc: "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
  },
  {
    id: 5,
    name: "Sarah Lee",
    message:
      "Your work is phenomenal. I am so impressed with the results. You truly made a difference in my project, and I am grateful for it.",
    rating: 5,
    imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/003/492/180/small_2x/mulatto-woman-student-holding-book-in-her-hand-and-study-back-to-school-image-free-photo.jpg",
  },
  {
    id: 5,
    name: "Chris Green",
    message:
      "Incredible experience! Your problem-solving skills and quick turnaround were impressive. Looking forward to working with you again soon.",
    rating: 5,
    imgSrc: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
  {
    id: 6,
    name: "Olivia Brown",
    message:
      "I am extremely happy with the project outcome. Your communication was clear and prompt, and the final product exceeded expectations. Highly recommended!",
    rating: 5,
    imgSrc: "https://t4.ftcdn.net/jpg/05/31/37/89/360_F_531378938_xwRjN9e5ramdPj2coDwHrwk9QHckVa5Y.jpg",
  },
];

const TestimonialCard = ({ name, message, rating, imgSrc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="card shadow-xl bg-base-200 p-6 rounded-xl flex flex-col items-center"
    >
      <img
        src={imgSrc}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full border-4 border-[#ff014dd9] mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-center">{message}</p>
      <div className="flex items-center mt-3">
        {Array.from({ length: rating }).map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-5 py-10"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#ff014dd9]">What People Say</h2>
        <p className="text-lg mt-2">Here’s what some of my clients have to say about my work.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </motion.div>
  );
}
