import { useState } from 'react';

export default function TestForm() {
  const [grade, setGrade] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode enviar os dados para um servidor ou fazer outra ação desejada.
    console.log('Grade:', grade);
    console.log('Student:', selectedStudent);
    console.log('Discipline:', selectedDiscipline);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
          Nota:
        </label>
        <input
          id="grade"
          type="number"
          step="0.01"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="student">
          Aluno:
        </label>
        <select
          id="student"
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          {/* Opções para selecionar um aluno (você pode preencher isso dinamicamente) */}
          <option value="student1">Aluno 1</option>
          <option value="student2">Aluno 2</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discipline">
          Disciplina:
        </label>
        <select
          id="discipline"
          value={selectedDiscipline}
          onChange={(e) => setSelectedDiscipline(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          {/* Opções para selecionar uma disciplina (você pode preencher isso dinamicamente) */}
          <option value="discipline1">Disciplina 1</option>
          <option value="discipline2">Disciplina 2</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
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
