// app/page.js (or index.js depending on your Next.js setup)
"use client";

import { useState, useEffect } from 'react';
import IssueCard from '@components/IssueCard';
import IssueForm from '@components/IssueForm';
import axios from 'axios';

const HomePage = () => {
  const [issues, setIssues] = useState([]);
  const [currentIssue, setCurrentIssue] = useState(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('/api/issues');
        setIssues(response.data);
      } catch (error) {
        console.error('Error fetching issues', error);
      }
    };
    fetchIssues();
  }, []);

  const handleAddIssue = async (issue) => {
    try {
      const response = await axios.post('/api/issues', issue);
      setIssues([...issues, response.data]);
    } catch (error) {
      console.error('Error adding issue', error);
    }
  };

  const handleUpdateIssue = async (updatedIssue) => {
    try {
      await axios.put(`/api/issues/${updatedIssue.id}`, updatedIssue);
      setIssues(issues.map(issue => issue.id === updatedIssue.id ? updatedIssue : issue));
      setCurrentIssue(null);
    } catch (error) {
      console.error('Error updating issue', error);
    }
  };

  const handleDeleteIssue = async (id) => {
    try {
      await axios.delete(`/api/issues/${id}`);
      setIssues(issues.filter(issue => issue.id !== id));
    } catch (error) {
      console.error('Error deleting issue', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Interactive Issue Tracking Page</h1>
      <IssueForm
        onSubmit={currentIssue ? handleUpdateIssue : handleAddIssue}
        initialData={currentIssue}
        isUpdating={!!currentIssue}
      />
      <div>
        {issues.map((issue) => (
          <IssueCard
            key={issue.id}
            issue={issue}
            onEdit={() => setCurrentIssue(issue)}
            onDelete={() => handleDeleteIssue(issue.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
