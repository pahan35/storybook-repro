import React from 'react';
import { MaterialButton } from "./MaterialButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Bugs / Union as object',
    component: MaterialButton
} as ComponentMeta<typeof MaterialButton>

const Template: ComponentStory<typeof MaterialButton> = (args) => <MaterialButton {...args} />;

export const Button = Template.bind({})
Button.args = {}
