
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [skills, setSkills] = useState('');
  const [role, setRole] = useState('Data Scientist');
  const router = useRouter();

  const handleSubmit = async () => {
    const skillList = skills.split(',').map(s => s.trim());
    router.push({
      pathname: '/roadmap',
      query: { skills: JSON.stringify(skillList), target_role: role },
    });
  };

  return (
    <main className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Learning Roadmap Generator</h1>
      <label>Choose Role:</label>
      <select className="border p-2 w-full" value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Data Scientist</option>
        <option>Full Stack Developer</option>
        <option>DevOps Engineer</option>
        <option>Machine Learning Engineer</option>
      </select>

      <label>Your Skills (comma-separated):</label>
      <input
        className="border p-2 w-full"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Python, Git, SQL"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Generate Roadmap
      </button>
    </main>
  );
}
