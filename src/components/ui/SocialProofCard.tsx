import React from "react";

interface SocialProofCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SocialProofCard: React.FC<SocialProofCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105 dark:bg-gray-800">
    {icon}
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

export default SocialProofCard;
