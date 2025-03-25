const Services = () => {
    const services = [
      {
        title: "Web Development",
        description: "Creating responsive and optimized websites with modern technologies like React, Tailwind, and more.",
        icon: "🌐",
      },
      {
        title: "UI/UX Design",
        description: "Designing intuitive and user-friendly interfaces to enhance user experience.",
        icon: "🎨",
      },
      {
        title: "Backend Development",
        description: "Building robust server-side applications using Node.js, Express, and MongoDB.",
        icon: "⚙️",
      },
      {
        title: "Deployment & Maintenance",
        description: "Ensuring smooth deployment and continuous maintenance for long-term stability.",
        icon: "🚀",
      },
    ];
  
    return (
      <section id="services" className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl text-[#FF014F] font-bold text-center mb-12">My Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 text-[#FF014F]">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-base text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  