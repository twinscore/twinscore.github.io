const skills = [
  'React', 'Laravel', 'MySQL', 'REST API', 'Tailwind CSS',
  'Docker', 'Linux', 'Networking'
];

export default function Skills() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Keahlian</h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <li key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
