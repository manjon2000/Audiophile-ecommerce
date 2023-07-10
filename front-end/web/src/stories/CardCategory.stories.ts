import type { Meta, StoryObj } from '@storybook/react';

import CardCategory from '../components/cardCategory/cardCategory';


const meta: Meta<typeof CardCategory> = {
    title: 'Atomic/Card Category',
    component: CardCategory,
    tags: ['autodocs'],
    argTypes: {}
};


export default meta;

type Story = StoryObj<typeof CardCategory>;

export const Default: Story = {};