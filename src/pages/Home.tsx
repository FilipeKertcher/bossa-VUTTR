import React, { useEffect, useState, useContext } from "react";
import Card from "components/Card";
import Typography from "components/Typography";
import Input from "components/Input";
import ToolInformation from "components/ToolInformation";
import ITool from "Models/tool";
import Button from "components/Button";
import { Modal, ModalContent, ModalActions } from "components/Modal";
import AddTool from "components/AddTool";

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
  const [addToolModalVisible, setAddToolModalVisible] = useState(true);

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
          <Typography tag={"span"} variant={"BodySmallest"}>
            Adicionar
          </Typography>
        </Button>
      </div>
      {toolsArray.map((item, index) => (
        <div key={index} style={{ marginTop: 10 }}>
          <Card elevationLevel={4}>
            <ToolInformation item={item} />
          </Card>
        </div>
      ))}
      {!!addToolModalVisible && (
        <Modal
          title={"Adicionar Ferramenta"}
          onClose={() => setAddToolModalVisible(false)}
        >
          <ModalContent>
            <AddTool />
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Home;
