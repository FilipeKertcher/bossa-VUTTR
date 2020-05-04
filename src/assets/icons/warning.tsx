import React from "react";

function WarningTagIcon({
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
      viewBox="0 0 44.999 39.711"
    >
      <path
        d="M42.171 39.711H2.831a2.828 2.828 0 01-2.443-4.247L20.056 1.398a2.837 2.837 0 014.891 0l19.666 34.066a2.848 2.848 0 010 2.858 2.8 2.8 0 01-2.442 1.389zM22.505 29.248a2.251 2.251 0 102.246 2.248 2.252 2.252 0 00-2.25-2.248zm-2.25-20.25v18h4.5v-18z"
        fill={fill}
      ></path>
    </svg>
  );
}

export default WarningTagIcon;
