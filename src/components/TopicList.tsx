import React from "react";

const topics = [
  { id: 1, name: "Blockchain Security" },
  { id: 2, name: "Smart Contracts" },
  { id: 3, name: "IPFS Storage" },
];

const TopicList: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2>Topics</h2>
      <ul className="list-group">
        {topics.map((topic) => (
          <li key={topic.id} className="list-group-item">
            {topic.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
