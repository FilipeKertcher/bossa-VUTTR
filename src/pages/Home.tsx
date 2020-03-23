import React, { useEffect, useState, useContext } from "react";
import Card from "components/Card";
import Typography from "components/Typography";
import Input from "components/Input";
import ToolInformation from "components/ToolInformation";
import ITool from "Models/tool";

const Home = () => {
  const [toolsArray, setToolsArray] = useState<ITool[]>([
    {
      title: "Fastify",
      link: "https://google.com",
      description: "É uma ferramenta ai bro",
      tags: ["fastify", "node js", "react", "teste"]
    },
    {
      title: "Fastify",
      link: "https://google.com",
      description: "É uma ferramenta ai bro",
      tags: ["fastify", "node js", "react", "teste"]
    }
  ]);
  const [searchField, setSearchField] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-around",
        width: "60%"
      }}
    >
      <div>
        <div>
          <Input
            value={searchField}
            onChange={setSearchField}
            placeholder={"search"}
          />
        </div>
      </div>
      {toolsArray.map(item => (
        <div style={{ marginTop: 10 }}>
          <Card elevationLevel={4}>
            <ToolInformation item={item} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Home;
