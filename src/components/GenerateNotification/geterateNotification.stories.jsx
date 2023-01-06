import { useState } from "react";

import { toastTypes } from "@/constants/toastTypes";
import { handleAddToasts } from "@/helpers/handleAddToasts";
import { theme } from "@/theme";

import { handleCapitalizedWord, types } from "./config";
import { GenerateNotification } from "./index";
import { Button, Container, Content, Option, Wrapper } from "./styles";

export default {
  title: "ToastProvider",
  component: GenerateNotification,
  argTypes: {
    position: {
      options: ["top right", "top left", "bottom right", "bottom left"],
      control: { type: "radio" },
    },
    animation: {
      options: [
        "from left to right",
        "disappearance",
        "from top to bottom",
        "from right to right",
        "from bottom to top",
      ],
      control: { type: "radio" },
    },
  },
};

export function Primary(args) {
  const [type, setType] = useState(toastTypes.success);
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [backgroundColor, setBackgroundColor] = useState();

  const handleSetType = (e) => {
    setType(e.target.value);
  };

  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSetSubtitle = (e) => {
    setSubtitle(e.target.value);
  };

  const handleSetBackgroundColor = (e) => {
    setBackgroundColor(e.target.value);
  };

  const config = [
    { id: "1", value: title, setValue: handleSetTitle, placeholder: "Title" },
    {
      id: "2",
      value: subtitle,
      setValue: handleSetSubtitle,
      placeholder: "Subtitle",
    },
  ];
  return (
    <Container>
      <Content name="types" id="types" value={type} onChange={handleSetType}>
        {types.map((value) => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Content>
      {config.map(({ value, setValue, placeholder, id }) => (
        <Wrapper
          key={id}
          value={value}
          onChange={setValue}
          placeholder={placeholder}
        />
      ))}
      <Content onChange={handleSetBackgroundColor}>
        <Option defaultValue="" disabled selected>
          Choose a color
        </Option>
        {Object.keys(theme.colors).map((color) => (
          <Option key={color}>{handleCapitalizedWord(color)}</Option>
        ))}
      </Content>
      <Button
        type="submit"
        onClick={handleAddToasts(type, { title, subtitle, backgroundColor })}
      >
        Click
      </Button>
      <GenerateNotification {...args} />
    </Container>
  );
}

Primary.args = {
  position: "top right",
  time: 2000,
  indent: 16,
  animation: "disappearance",
};
