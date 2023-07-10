import type { Meta, StoryObj } from '@storybook/react';
import {RadioButton} from '../components/radioButton/radioButton';

const meta: Meta<typeof RadioButton> = {
    title: 'Atomic/Radio Button',
    component: RadioButton,
    tags: ['autodocs'],
    argTypes: {}
}


export default meta;


type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        radioButtonId: "534",
        inputName: "BailaBaila",
        label: "Cash on Delivery",
    }
}