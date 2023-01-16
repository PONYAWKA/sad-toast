import { ToastConigType } from "types/ToastOptionType";
import { ToastExamplePage } from ".";

export default {
  title: "Example",
  component: ToastExamplePage,
  argTypes: {
    type: {
      options: ["warning", "info", "error", "success"],
      control: { type: "radio" },
    },
    position: {
      options: ["LeftTop", "LeftBottom", "RightTop", "RightBottom"],
      control: { type: "radio" },
    },
    animation: {
      options: ["leftToRight", "rightToLeft", "fade"],
      control: { type: "radio" },
    }
  },
};

const Teamplate = (args: ToastConigType) => <ToastExamplePage {...args} />;

export const Default = Teamplate.bind({});
