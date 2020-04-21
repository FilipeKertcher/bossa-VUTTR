import React, { useState } from "react";
import Typography from "components/Typography";
import Input from "components/Input";
import Card from "components/Card";
import { InfoWrapper, Bullet } from "./style";

interface IToolInformation {
  tags?: string[];
  onChange?: (items: string[]) => void;
}

const TagInput = ({ tags = [], onChange }: IToolInformation) => {
  const [currentTags, setCurrentTags] = useState(tags);
  const [tagName, setTagName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const removeFromTags = (name: string) => {
    const newItems = [...currentTags.filter((x) => x !== name)];
    setCurrentTags(newItems);
    if (!!onChange) onChange(newItems);
  };

  const addTag = (newTag: string) => {
    const newItems = [...currentTags, newTag];
    setCurrentTags(newItems);
    if (!!onChange) onChange(newItems);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.keyCode || e.which;
    if (key === 13 && !!tagName) {
      const found = currentTags.indexOf(tagName);
      if (found !== -1) setErrorMessage("Você já adicionou essa tag!");
      else {
        addTag(tagName);
        setTagName("");
      }
    } else setErrorMessage("");
  };

  return (
    <div className={"flex flex-col"}>
      <Input
        placeholder={"Digite uma tag!"}
        label={"Link da Ferramenta"}
        name="toolLink"
        value={tagName}
        errorMessage={errorMessage}
        onChange={(e: any) => setTagName(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <InfoWrapper className={"tooltip"}>
        i{" "}
        <Card
          elevationLevel={4}
          className={"tooltiptext"}
          style={{ width: 300 }}
        >
          <div className={"m-2 text-justify"}>
            <Typography tag={"span"} variant={"BodySmallest"}>
              <strong>Para criar uma tag: </strong> digite o nome e pressione{" "}
              <strong>enter</strong> para salvar.
            </Typography>
            <br />
            <br />
            <Typography tag={"span"} variant={"BodySmallest"}>
              <strong>Para remover uma tag:</strong> clique em cima dela!
            </Typography>
          </div>
        </Card>
      </InfoWrapper>

      <div className={"flex flex-row   flex-wrap mt-2"}>
        {currentTags.map((tag) => (
          <Bullet
            key={tag}
            onClick={() => removeFromTags(tag)}
            className={"m-1"}
          >
            {tag}
          </Bullet>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
