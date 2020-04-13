import React, { useEffect, useState, useContext } from "react";
import Typography from "components/Typography";
import mainTheme from "themes/main";
import ITool from "Models/tool";
interface IToolInformation {
  item: ITool;
}

const ToolInformation = ({ item }: IToolInformation) => {
  return (
    <div className={"flex flex-col"}>
      <div className={"flex-row"}>
        <Typography tag={"h4"} variant={"Heading4"} color={"darkGreen"}>
          {item.title}
        </Typography>
      </div>
      <div className={"flex-row"}>
        <Typography tag={"span"} variant={"Body"} color={"darkGreen"}>
          {item.description}
        </Typography>
      </div>
      <div className={"flex-row"}>
        {item.tags.map((tag) => (
          <Typography
            tag={"span"}
            variant={"BodySmallest"}
            color={"darkGreen"}
            style={{ marginLeft: 10, fontWeight: mainTheme.fontWeights.bold }}
          >
            #{tag}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default ToolInformation;
