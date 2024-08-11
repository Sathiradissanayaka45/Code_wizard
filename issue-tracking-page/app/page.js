"use client"; // Add this at the very top

import { useState } from 'react';
import IssueCard from './components/IssueCard';
import IssueForm from './components/IssueForm';

const HomePage = () => {
  const [issues, setIssues] = useState([]);

  const addIssue = (issue) => {
    setIssues([...issues, issue]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Interactive Issue Tracking Page</h1>
      <IssueForm onSubmit={addIssue} />
      <div>
        {issues.map((issue, index) => (
          <IssueCard key={index} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
