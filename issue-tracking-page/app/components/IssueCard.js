// components/IssueCard.js
const IssueCard = ({ issue, onEdit, onDelete }) => {
    return (
      <div className="border p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-bold">{issue.title}</h2>
        <p className="text-gray-600">{issue.description}</p>
        <p className="text-sm text-gray-500">Technology: {issue.technology}</p>
        <p className="text-sm text-gray-500">Status: {issue.status}</p>
        <p className="text-sm text-gray-500">Reported by: {issue.reportedBy}</p>
        <div className="mt-2">
          <button
            onClick={onEdit}
            className="bg-yellow-500 text-white p-2 rounded mr-2"
          >
            Update
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white p-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default IssueCard;
  