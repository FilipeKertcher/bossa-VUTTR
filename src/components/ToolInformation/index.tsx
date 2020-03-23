import React, { useEffect, useState, useContext } from "react";
import Container from "./style";
import Typography from "components/Typography";
import mainTheme from "themes/main";
import ITool from "Models/tool";
interface IToolInformation {
  item: ITool;
}

const ToolInformation = ({ item }: IToolInformation) => {
  return (
    <Container.Column>
      <Container.Row>
        <Container.Row>
          <Typography tag={"h4"} variant={"Heading4"} color={"darkGreen"}>
            {item.title}
          </Typography>
        </Container.Row>
      </Container.Row>
      <Container.Row>
        <Typography tag={"span"} variant={"Body"} color={"darkGreen"}>
          {item.description}
        </Typography>
      </Container.Row>
      <Container.Row style={{ justifyContent: "flex-start" }}>
        {item.tags.map(tag => (
          <Typography
            tag={"span"}
            variant={"BodySmallest"}
            color={"darkGreen"}
            style={{ marginLeft: 10, fontWeight: mainTheme.fontWeights.bold }}
          >
            {tag}
          </Typography>
        ))}
      </Container.Row>
    </Container.Column>
  );
};

export default ToolInformation;
