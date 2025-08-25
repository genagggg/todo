import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Расположение элементов'
    },
    disabled: {
      control: 'boolean',
      description: 'Отключить всю группу'
    },
    required: {
      control: 'boolean',
      description: 'Обязательный выбор'
    },
    invalid: {
      control: 'boolean',
      description: 'Показать состояние ошибки'
    },
    onChange: {
      action: 'changed',
      description: 'Обработчик изменения значения'
    },
    onInvalid: {
      action: 'invalid',
      description: 'Обработчик невалидного состояния'
    }
  },
};

export default meta;

// Базовые опции для примеров
const defaultOptions = [
  { value: 'option1', label: 'Опция 1' },
  { value: 'option2', label: 'Опция 2' },
  { value: 'option3', label: 'Опция 3', disabled: true },
];

// Шаблон для интерактивных примеров
const InteractiveTemplate: StoryObj<typeof RadioGroup> = {
  render: (args) => {
    const [value, setValue] = useState<string | number | null>(null);
    
    return (
      <RadioGroup 
        {...args} 
        value={value}
        onChange={(val) => setValue(val)}
      />
    );
  },
};

export const Default: StoryObj<typeof RadioGroup> = {
  ...InteractiveTemplate,
  args: {
    options: defaultOptions,
    name: 'radio-group'
  },
};

export const Horizontal: StoryObj<typeof RadioGroup> = {
  ...InteractiveTemplate,
  args: {
    options: defaultOptions,
    direction: 'horizontal',
    name: 'radio-group-horizontal'
  },
};

export const DisabledGroup: StoryObj<typeof RadioGroup> = {
  args: {
    options: defaultOptions,
    disabled: true,
    name: 'radio-group-disabled'
  },
};

export const Required: StoryObj<typeof RadioGroup> = {
  ...InteractiveTemplate,
  args: {
    options: defaultOptions,
    required: true,
    name: 'radio-group-required'
  },
};

export const WithError: StoryObj<typeof RadioGroup> = {
  ...InteractiveTemplate,
  args: {
    options: defaultOptions,
    invalid: true,
    name: 'radio-group-error'
  },
};

export const Controlled: StoryObj<typeof RadioGroup> = {
  render: () => {
    const [value, setValue] = useState<string | number>('option2');
    const options = [
      { value: 'option1', label: 'Первый вариант' },
      { value: 'option2', label: 'Второй вариант (выбран по умолчанию)' },
      { value: 'option3', label: 'Третий вариант' },
    ];
    
    return (
      <div>
        <RadioGroup 
          options={options} 
          value={value} 
          onChange={setValue}
          name="controlled-group"
        />
        <div style={{ marginTop: '16px' }}>
          Текущее значение: <strong>{value}</strong>
        </div>
      </div>
    );
  },
};

export const WithDisabledOption: StoryObj<typeof RadioGroup> = {
  args: {
    options: [
      { value: 1, label: 'Активная опция' },
      { value: 2, label: 'Неактивная опция', disabled: true },
      { value: 3, label: 'Еще одна активная' },
    ],
    name: 'radio-group-with-disabled'
  },
};