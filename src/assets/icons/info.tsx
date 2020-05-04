import React from "react";

function InfoIcon({
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
      viewBox="0 0 45 45"
    >
      <path
        d="M22.5 45.001a22.5 22.5 0 1115.91-6.59 22.354 22.354 0 01-15.91 6.59zm-2.252-27v18h4.5v-18zM22.5 11.25a2.249 2.249 0 102.252 2.252A2.256 2.256 0 0022.5 11.25z"
        fill={fill}
      ></path>
    </svg>
  );
}

export default InfoIcon;
