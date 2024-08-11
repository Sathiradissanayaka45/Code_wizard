const IssueCard = ({ issue }) => {
    return (
      <div className="border p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-bold">{issue.title}</h2>
        <p className="text-gray-600">{issue.description}</p>
        <p className="text-sm text-gray-500">Technology: {issue.technology}</p>
        <p className="text-sm text-gray-500">Status: {issue.status}</p>
        <p className="text-sm text-gray-500">Reported by: {issue.reportedBy}</p>
      </div>
    );
  };
  
  export default IssueCard;
  