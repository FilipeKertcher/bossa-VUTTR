import React, { useEffect, useState } from "react";
import Input from "components/Input";
import TextArea from "components/TextArea";
import Button from "components/Button";
import Typography from "components/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import TagInput from "components/TagInput";

const AddTool = ({}) => {
  const formik = useFormik({
    initialValues: {
      toolName: "",
      toolLink: "",
      toolDescription: "",
    },
    validationSchema: Yup.object().shape({
      toolName: Yup.string().required("Precisamos de um nome!"),
      toolLink: Yup.string().required("Meu cachorro pediu, sabe?"),
      toolDescription: Yup.string().required(
        "Conte como essa ferramenta te ajuda!"
      ),
    }),

    onSubmit: async (values) => {
      try {
        alert(JSON.stringify({ ...values, toolTags }, null, 2));
      } catch (error) {
        console.log("ERROR");
        console.log(error);
      }
    },
  });

  const [toolTags, setToolTags] = useState<string[]>([]);

  return (
    <div>
      <div>
        <Input
          errorMessage={
            formik.errors.toolName && formik.touched.toolName
              ? formik.errors.toolName
              : ""
          }
          placeholder={"Digite o nome da ferramenta"}
          label={"Nome da Ferramenta"}
          required
          name="toolName"
          value={formik.values.toolName}
          onChange={formik.handleChange}
        />
      </div>
      <div className={"mt-4"}>
        <Input
          errorMessage={
            formik.errors.toolLink && formik.touched.toolLink
              ? formik.errors.toolLink
              : ""
          }
          placeholder={"Cole aqui o link para ferramenta"}
          label={"Link da Ferramenta"}
          required
          name="toolLink"
          value={formik.values.toolLink}
          onChange={formik.handleChange}
        />
      </div>
      <div className={"mt-4"}>
        <TextArea
          errorMessage={
            formik.errors.toolDescription && formik.touched.toolDescription
              ? formik.errors.toolDescription
              : ""
          }
          placeholder={"Conte mais sobre a ferramenta!"}
          label={"Descrição da Ferramenta"}
          required
          name="toolDescription"
          value={formik.values.toolDescription}
          onChange={formik.handleChange}
        />
      </div>
      <div className={"mt-4"}>
        <TagInput onChange={setToolTags} />
      </div>
      <div className={"flex flex-row justify-end items-center mt-8"}>
        <Button
          intent={"Success"}
          variant={"Primary"}
          onClick={formik.handleSubmit}
        >
          <Typography
            tag={"span"}
            variant={"BodySmallest"}
            style={{ fontWeight: "bold" }}
            color={"white"}
          >
            Adicionar
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default AddTool;
