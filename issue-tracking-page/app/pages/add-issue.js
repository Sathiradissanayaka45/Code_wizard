// pages/add-issue.js
import IssueForm from '@components/IssueForm';
import { useRouter } from 'next/router';

const AddIssuePage = () => {
  const router = useRouter();

  const handleSubmit = async (issue) => {
    try {
      await axios.post('/api/issues', issue);
      router.push('/');
    } catch (error) {
      console.error('Error adding issue:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Issue</h1>
      <IssueForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddIssuePage;
