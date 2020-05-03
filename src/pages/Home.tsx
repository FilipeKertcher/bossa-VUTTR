import React, { useEffect, useState, useContext } from "react";
import Card from "components/Card";
import Typography from "components/Typography";
import Input from "components/Input";
import ToolInformation from "components/ToolInformation";
import ITool from "models/tool";
import Button from "components/Button";
import { Modal } from "components/Modal";
import AddTool from "components/AddTool";
import { ModalContent } from "components/Modal/style";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { listTools } from "stores/ducks/tools/actions";
import RadioButton from "components/RadioButton";

const Home = () => {
  const toolsArray = useSelector((state: { tools: ITool[] }) => state.tools);
  const [searchField, setSearchField] = useState("");
  const [tagSearchEnabled, setTagSearchEnabled] = useState(false);
  const [addToolModalVisible, setAddToolModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const reduxAction = await listTools({});
      dispatch(reduxAction);
    }
    fetchData();
    return () => {};
  }, []);
  const StyledList = styled.div`
    overflow-y: auto;
    height: 400px;
    padding-bottom: 20px;
    margin-top: 20px;

    @media (min-width: 768px) {
      max-height: 600px;
    }

    &::-webkit-scrollbar {
      display: none;
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
        <div className={"flex flex-row justify-between items-center"}>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-center">
            <Input
              value={searchField}
              onChange={(e: any) => setSearchField(e.target.value)}
              placeholder={"Pesquisar"}
            />
            <div className="mt-1 md:ml-2">
              <RadioButton
                description={"Pesquisar apenas tags"}
                onChange={(checked) => setTagSearchEnabled(checked)}
              />
            </div>
          </div>

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
