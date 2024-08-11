// pages/edit-issue/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import IssueForm from '@components/IssueForm';

const EditIssuePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchIssue = async () => {
        try {
          const response = await axios.get(`/api/issues/${id}`);
          setInitialData(response.data);
        } catch (error) {
          console.error('Error fetching issue:', error);
        }
      };
      fetchIssue();
    }
  }, [id]);

  const handleUpdate = async (updatedIssue) => {
    try {
      await axios.put(`/api/issues/${id}`, updatedIssue);
      router.push('/');
    } catch (error) {
      console.error('Error updating issue:', error);
    }
  };

  if (!initialData) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Issue</h1>
      <IssueForm
        onSubmit={handleUpdate}
        initialData={initialData}
        isUpdating={true}
      />
    </div>
  );
};

export default EditIssuePage;
