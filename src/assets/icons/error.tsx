import React from "react";

function ErrorTagIcon({
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
        fill={fill}
        d="M22.498 45.001l-22.5-22.5 22.5-22.5 22.5 22.5-22.5 22.5zm0-15.746a2.249 2.249 0 102.248 2.249 2.253 2.253 0 00-2.248-2.25zm-2.25-20.25v18h4.5V9.001z"
      ></path>
    </svg>
  );
}

export default ErrorTagIcon;
