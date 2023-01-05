import { ToastExamplePage } from ".";

export default {
  title: "Example",
  component: ToastExamplePage,
};

const Teamplate: React.FC = (args: any) => <ToastExamplePage {...args} />;

export const Default = Teamplate.bind({});
