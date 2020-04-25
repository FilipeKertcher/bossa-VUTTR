import React, { useEffect, useState, useContext } from "react";
import Card from "components/Card";
import Typography from "components/Typography";
import Input from "components/Input";
import ToolInformation from "components/ToolInformation";
import ITool from "Models/tool";
import Button from "components/Button";
import { Modal } from "components/Modal";
import AddTool from "components/AddTool";
import { ModalContent } from "components/Modal/style";
import styled from "styled-components";

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

  const StyledList = styled.div`
    overflow-y: auto;
    height: 400px;
    padding-bottom: 20px;
    margin-top: 20px;

    @media (min-width: 768px) {
      max-height: 600px;
    }
  `;

  return (
    <div
      className={`

        flex flex-col 
        items-stretch 
        justify-between 
        md:justify-around


        xs:h-full
        w-11/12 
        lg:w-2/4 
        lg:1/4


      `}
    >
      <div />
      <div>
        <Typography
          tag={"h1"}
          variant={"Heading2"}
          color={"darkerPurple"}
          style={{ textAlign: "center" }}
        >
          VUTTR
        </Typography>
        <Typography
          tag={"h2"}
          variant={"Heading4"}
          color={"darkerPurple"}
          style={{ textAlign: "center" }}
        >
          Very Useful Tools to Remember
        </Typography>
      </div>

      <div className={"flex flex-col"}>
        <div className={"flex flex-row justify-between items-end"}>
          <Input
            value={searchField}
            onChange={(e: any) => setSearchField(e.target.value)}
            placeholder={"Pesquisar"}
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
        <StyledList>
          {toolsArray.map((item, index) => (
            <div key={index} style={{ marginTop: 10 }}>
              <Card elevationLevel={4}>
                <ToolInformation item={item} />
              </Card>
            </div>
          ))}
        </StyledList>
      </div>

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
