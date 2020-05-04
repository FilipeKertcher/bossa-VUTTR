import React from "react";

function CloseIcon({
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
      viewBox="0 0 61.414 61.42"
    >
      <g transform="translate(-568.793 -714.793)">
        <path
          d="M80,20.005l-60,60m60,0L20,20"
          transform="translate(549.501 695.5)"
          stroke={fill}
        />
      </g>
    </svg>
    //   <svg
    //   xmlns="http://www.w3.org/2000/svg" width="61.414" height="61.42" viewBox="0 0 61.414 61.42">
    //   <defs>
    //     <style>.a{fill:none;stroke:#170c3a;stroke-miterlimit:10;stroke-width:2px;}</style>
    //   </defs>
    //   <g transform="translate(-568.793 -714.793)">
    //     <path class="a" d="M80,20.005l-60,60m60,0L20,20" transform="translate(549.501 695.5)"/>
    //   </g>
    // </svg>
  );
}

export default CloseIcon;
