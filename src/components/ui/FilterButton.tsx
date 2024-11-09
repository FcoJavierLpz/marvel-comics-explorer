import React from "react";

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  active,
  onClick,
  icon,
  label,
}) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      active
        ? "bg-marvel-red text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default FilterButton;
