import React, { useEffect, useState, useContext } from "react";
import Card from "components/Card";
import Typography from "components/Typography";
import Input from "components/Input";
import ToolInformation from "components/ToolInformation";
import ITool from "Models/tool";
import Button from "components/Button";
import AddToolModal from "components/Modal";
import Modal from "components/Modal";

const Home = () => {
  const [toolsArray, setToolsArray] = useState<ITool[]>([
    {
      title: "Fastify",
      link: "https://google.com",
      description: "É uma ferramenta ai bro",
      tags: ["fastify", "node js", "react", "teste"],
    },
    {
      title: "Fastify",
      link: "https://google.com",
      description: "É uma ferramenta ai bro",
      tags: ["fastify", "node js", "react", "teste"],
    },
  ]);
  const [searchField, setSearchField] = useState("");
  const [addToolModalVisible, setAddToolModalVisible] = useState(false);

  return (
    <div
      className={"flex flex-col items-stretch justify-around"}
      style={{
        width: "60%",
      }}
    >
      <div className={"flex flex-row justify-between items-end"}>
        <Input
          value={searchField}
          onChange={setSearchField}
          placeholder={"search"}
        />

        <Button
          intent={"Neutral"}
          variant={"Secondary"}
          onClick={() => setAddToolModalVisible(true)}
        >
          <Typography
            tag={"span"}
            variant={"BodySmallest"}
            color={"lightInk"}
            style={{ fontWeight: "bold" }}
          >
            Adicionar
          </Typography>
        </Button>
      </div>
      {toolsArray.map((item) => (
        <div style={{ marginTop: 10 }}>
          <Card elevationLevel={4}>
            <ToolInformation item={item} />
          </Card>
        </div>
      ))}
      {!!addToolModalVisible && <Modal onClose={() => {}}>TESTE</Modal>}
    </div>
  );
};

export default Home;
