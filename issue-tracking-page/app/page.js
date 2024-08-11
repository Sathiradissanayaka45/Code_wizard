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

  const handleAddIssue = (issue) => {
    setIssues([...issues, issue]);
  };

  const handleUpdateIssue = (updatedIssue) => {
    setIssues(issues.map(issue => issue.id === updatedIssue.id ? updatedIssue : issue));
    setCurrentIssue(null);
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
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
