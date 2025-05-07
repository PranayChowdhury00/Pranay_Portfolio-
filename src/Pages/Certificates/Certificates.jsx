
const CertificateItem = ({ title, image, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-b-4 border-[#3498db] hover:scale-105 hover:shadow-xl transition-all duration-300">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-semibold text-[#3498db] mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Certificates = () => {
  const certificates = [
    {
      title: "Frontend Developer (React) Certificate",
      image: "./1741082767613.jpeg", // Replace with your certificate image path
      description: "Issued by HackerRank | 2025",
    },
    {
      title: "JavaScript (Intermediate) Certificate",
      image: "./javascript_intermediate certificate_page-0001.jpg", // Replace with your certificate image path
      description: "Issued by HackerRank | 2025",
    },
    {
      title: "Web Development Course Certificate",
      image: "./ProgramingHero_Certificate_page-0001.jpg", // Replace with your certificate image path
      description: "Issued by Programming Hero | 2024",
    },
    {
      title: "Cybersecurity course",
      image: "./1745726354807.jpeg", // Replace with your certificate image path
      description: "Issued by Cisco Networking Academy | 2025"
    },
  ];

  return (
    <section className="mb-20 max-w-7xl mx-auto px-5">
      <header className="text-center mb-12" data-aos="fade-down" data-aos-duration="1000">
        <h1 className="text-[#ff014dd9] font-semibold text-4xl">My Certificates</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {certificates.map((certificate, index) => (
          <CertificateItem
            key={index}
            title={certificate.title}
            image={certificate.image}
            description={certificate.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
