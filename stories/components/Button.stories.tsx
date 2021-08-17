import React from "react";
import Button, { IButton } from "@/components/Button";
import { Story } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<IButton> = (args: IButton) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "버튼 텍스트",
};
