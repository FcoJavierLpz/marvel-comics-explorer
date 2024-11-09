import React from "react";

interface NoResultsMessageProps {
  searchTerm: string;
}

const NoResultsMessage: React.FC<NoResultsMessageProps> = ({ searchTerm }) => (
  <div className="text-center text-gray-600 dark:text-gray-400">
    <p className="text-lg">
      No se encontraron cómics que coincidan con "{searchTerm}"
    </p>
  </div>
);

export default NoResultsMessage;
