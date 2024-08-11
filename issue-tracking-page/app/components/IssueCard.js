// components/IssueCard.js
const IssueCard = ({ issue, onEdit }) => {
    return (
      <div className="border p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-bold">{issue.title}</h2>
        <p className="text-gray-600">{issue.description}</p>
        <p className="text-sm text-gray-500">Technology: {issue.technology}</p>
        <p className="text-sm text-gray-500">Status: {issue.status}</p>
        <p className="text-sm text-gray-500">Reported by: {issue.reportedBy}</p>
        <button onClick={onEdit} className="bg-yellow-500 text-white p-2 rounded mt-2">
          Edit
        </button>
      </div>
    );
  };
  
  export default IssueCard;
  