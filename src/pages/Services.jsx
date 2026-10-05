export default function Services() {
  const services = [
    { title: "Web Development", desc: "Building beautiful, responsive, and high-performance websites tailored to your needs.", icon: "💻" },
    { title: "UI/UX Design", desc: "Crafting intuitive and engaging user experiences with modern aesthetics.", icon: "🎨" },
    { title: "Digital Marketing", desc: "Expanding your reach and growing your audience through targeted campaigns.", icon: "🚀" }
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Our Services
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We offer a comprehensive suite of services designed to elevate your brand and drive results.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, idx) => (
          <div key={idx} className="group rounded-3xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ring-1 ring-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h2>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
