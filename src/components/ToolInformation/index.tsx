import React, { useEffect, useState, useContext } from "react";
import Typography from "components/Typography";
import mainTheme from "themes/main";
import ITool from "Models/tool";
import { ReactComponent as CloseButton } from "assets/icons/modal_close.svg";
import Button from "components/Button";
import { Modal } from "components/Modal";
import { ModalContent, ModalActions } from "components/Modal/style";

interface IToolInformation {
  item: ITool;
}

const ToolInformation = ({ item }: IToolInformation) => {
  const [removeToolModalVisible, setRemoveToolModalVisible] = useState(false);

  return (
    <div className={"flex flex-col"}>
      <div className={"flex flex-row justify-between"}>
        <Typography tag={"h4"} variant={"Heading4"} color={"darkGreen"}>
          {item.title}
        </Typography>

        <Button
          onClick={() => setRemoveToolModalVisible(true)}
          variant={"Quartiary"}
          intent={"Neutral"}
          noPadding
        >
          <div className={"flex flex-row items-center"}>
            <CloseButton />
            <Typography
              tag={"span"}
              variant={"BodySmall"}
              color={"lightInk"}
              style={{ marginLeft: 5 }}
            >
              Remover
            </Typography>
          </div>
        </Button>
      </div>
      <div className={"flex-row"}>
        <Typography tag={"span"} variant={"Body"} color={"darkGreen"}>
          {item.description}
        </Typography>
      </div>
      <div className={"flex-row"}>
        {item.tags.map((tag, index) => (
          <Typography
            tag={"span"}
            variant={"BodySmallest"}
            color={"darkGreen"}
            key={index}
            style={{ marginLeft: 10, fontWeight: mainTheme.fontWeights.bold }}
          >
            #{tag}
          </Typography>
        ))}
      </div>
      {!!removeToolModalVisible && (
        <Modal
          title={"Remover Ferramenta"}
          onClose={() => setRemoveToolModalVisible(false)}
        >
          <ModalContent>
            <Typography
              variant={"Heading4"}
              tag={"h4"}
              className={"text-justify"}
            >
              Você tem certeza de que quer remover {item.title} ?
            </Typography>
          </ModalContent>
          <ModalActions>
            <Button
              variant={"Primary"}
              intent={"Neutral"}
              onClick={() => setRemoveToolModalVisible(false)}
            >
              <Typography color={"white"} variant={"BodySmallest"} tag={"span"}>
                Cancelar
              </Typography>
            </Button>
            <Button variant={"Primary"} intent={"Danger"} onClick={() => {}}>
              <Typography color={"white"} variant={"BodySmallest"} tag={"span"}>
                Sim, remover
              </Typography>
            </Button>
          </ModalActions>
        </Modal>
      )}
    </div>
  );
};

export default ToolInformation;
