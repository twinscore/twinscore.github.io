const projects = [
  {
    title: 'Inventory System',
    description: 'Laravel + React + MySQL untuk pengelolaan stok barang.',
  },
  {
    title: 'Company Website',
    description: 'React + Tailwind CSS, deploy ke Netlify.',
  },
  {
    title: 'Network Monitor',
    description: 'Dashboard pemantauan jaringan berbasis Laravel + SNMP.',
  },
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">Proyek</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{proj.title}</h3>
            <p className="text-sm">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
