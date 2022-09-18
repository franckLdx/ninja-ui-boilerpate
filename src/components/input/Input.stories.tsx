import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

type InputStory = ComponentStory<typeof Input>

const meta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input
}

export default meta

export const Secondary: InputStory = () => <Input variant='secondary' />;