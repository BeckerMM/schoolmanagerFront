import { useState } from 'react';

export default function DisciplineForm() {
  const [disciplineName, setDisciplineName] = useState('');
  const [workload, setWorkload] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="disciplineName">
          Nome da Disciplina:
        </label>
        <input
          id="disciplineName"
          type="text"
          value={disciplineName}
          onChange={(e) => setDisciplineName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="workload">
          Carga Horária:
        </label>
        <input
          id="workload"
          type="number"
          value={workload}
          onChange={(e) => setWorkload(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Salvar
      </button>
    </form>
  );
}
