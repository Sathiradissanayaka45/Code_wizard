import { useState } from 'react';

const IssueForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technology, setTechnology] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, technology, status: 'Open', reportedBy: 'User' });
    setTitle('');
    setDescription('');
    setTechnology('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Issue Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        placeholder="Issue Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        placeholder="Technology"
        value={technology}
        onChange={(e) => setTechnology(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Submit Issue
      </button>
    </form>
  );
};

export default IssueForm;
