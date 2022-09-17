import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

type ButonStory = ComponentStory<typeof Button>

const meta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button
}

export default meta

export const Primary: ButonStory = () => <Button>Button</Button>;