import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',  // Путь в Storybook
  component: Button,
};

export default meta;

// Варианты кнопки
export const Primary: StoryObj<typeof Button> = {
  args: {
    label: 'Click me',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: 'Cancel',
  },
};

export const Therdary: StoryObj<typeof Button> = {
  args: {
    label: 'Залупа Бля',
  },
};