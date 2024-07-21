import React from "react";

interface LeftIconProps {
  className?: string;
}

const LeftIcon: React.FC<LeftIconProps> = ({ className }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      className={className}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export default LeftIcon;
