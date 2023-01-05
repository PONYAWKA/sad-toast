import { Toast } from "components/Toast/index";

export default {
  title: "Example",
  component: Toast,
};

const Teamplate: React.FC = (args: any) => <Toast {...args} />;

export const Default = Teamplate.bind({});
