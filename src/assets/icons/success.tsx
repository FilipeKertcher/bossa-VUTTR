import React from "react";

function SuccessTagIcon({
  fill = "#FFFFFF",
  height,
  width,
}: {
  fill?: string;
  height: number;
  width: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 45 44.999"
    >
      <path
        d="M22.498 45.001a22.5 22.5 0 1115.908-6.589 22.358 22.358 0 01-15.908 6.589zm-8.076-25.138l-3.178 3.183 6.205 6.093L19.314 31l14.32-14.319-3.189-3.177-11.187 11.195-4.836-4.835z"
        fill={fill}
      ></path>
    </svg>
  );
}

export default SuccessTagIcon;
