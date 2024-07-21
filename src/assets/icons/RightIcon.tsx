import React from "react";

interface RightIconProps {
  className?: string;
}

const RightIcon: React.FC<RightIconProps> = ({ className }) => {
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
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default RightIcon;
