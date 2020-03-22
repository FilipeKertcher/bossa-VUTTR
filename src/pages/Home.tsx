import React, { useEffect, useState, useContext } from "react";
import Card from "components/Card";
import Typography from "components/Typography";
import Input from "components/Input";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <Card elevationLevel={4}>
      <Typography tag={"span"} variant={"Heading1"} color={"purple"}>
        <Input onChange={setValue} value={value} label={"teste"} required />
        <Input onChange={setValue} value={value} label={"teste"} required />
      </Typography>
    </Card>
  );
};

export default Home;
