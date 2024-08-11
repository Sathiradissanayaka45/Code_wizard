// components/IssueForm.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const IssueForm = ({ onSubmit, initialData, isUpdating }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technology, setTechnology] = useState('');
  const [status, setStatus] = useState('');
  const [reportedBy, setReportedBy] = useState('');

  useEffect(() => {
    if (isUpdating && initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setTechnology(initialData.technology);
      setStatus(initialData.status);
      setReportedBy(initialData.reportedBy);
    }
  }, [initialData, isUpdating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const issue = { title, description, technology, status, reportedBy };

    try {
      if (isUpdating) {
        await axios.put(`/api/issues/${initialData.id}`, issue);
        onSubmit({ ...initialData, ...issue });
      } else {
        const response = await axios.post('/api/issues', issue);
        onSubmit(response.data);
      }
      // Reset form after submission
      setTitle('');
      setDescription('');
      setTechnology('');
      setStatus('');
      setReportedBy('');
    } catch (error) {
      console.error('Error saving issue', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Issue Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <textarea
        placeholder="Issue Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="text"
        placeholder="Technology"
        value={technology}
        onChange={(e) => setTechnology(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        placeholder="Reported By"
        value={reportedBy}
        onChange={(e) => setReportedBy(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        {isUpdating ? 'Update Issue' : 'Create Issue'}
      </button>
    </form>
  );
};

export default IssueForm;
