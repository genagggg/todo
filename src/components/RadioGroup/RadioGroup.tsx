import React, { type ChangeEvent, type SyntheticEvent, useCallback, useState } from 'react';
import './RadioGroup.css'; // Стили вынесены в отдельный файл

export type RadioValue = string | number;

export interface RadioOption {
  value: RadioValue;
  label: string;
  disabled?: boolean;
  name?: string;
}

export interface RadioGroupProps {
  /**
   * Текущее выбранное значение
   */
  value?: RadioValue | null;
  
  /**
   * Значение по умолчанию
   */
  defaultValue?: RadioValue | null;
  
  /**
   * Отключить все радио-кнопки
   */
  disabled?: boolean;
  
  /**
   * Обязательный выбор
   */
  required?: boolean;
  
  /**
   * Показать состояние ошибки
   */
  invalid?: boolean;
  
  /**
   * Опции для радио-кнопок
   */
  options: RadioOption[];
  
  /**
   * Обработчик невалидного состояния
   */
  onInvalid?: (event: SyntheticEvent<HTMLInputElement>) => void;
  
  /**
   * Обработчик изменения значения
   */
  onChange?: (value: RadioValue, option: RadioOption) => void;
  
  /**
   * Направление расположения кнопок
   */
  direction?: 'vertical' | 'horizontal';
  
  /**
   * Имя группы радио-кнопок
   */
  name?: string;
  
  /**
   * ARIA-атрибут для доступности
   */
  'aria-labelledby'?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const {
    onChange,
    options = [],
    value: propValue,
    defaultValue,
    disabled,
    required,
    invalid,
    onInvalid,
    direction = 'vertical',
    name,
    'aria-labelledby': ariaLabelledBy,
  } = props;

  const [selectedValue, setSelectedValue] = useState<RadioValue | null>(
    propValue !== undefined ? propValue : defaultValue ?? null
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, option: RadioOption) => {
      const newValue = e.target.value;
      setSelectedValue(newValue);
      onChange?.(newValue, option);
    },
    [onChange]
  );

  const currentValue = propValue !== undefined ? propValue : selectedValue;

  return (
    <div
      role="radiogroup"
      className={`radio-group radio-group--${direction}`}
      aria-labelledby={ariaLabelledBy}
    >
      {options.map((option, index) => {
        const isChecked = currentValue != null && option.value == currentValue;
        
        return (
          <label key={index} className="radio-option">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isChecked}
              disabled={disabled || option.disabled}
              required={required}
              onChange={(e) => handleChange(e, option)}
              onInvalid={onInvalid}
              className={invalid && isChecked ? 'invalid' : ''}
            />
            <span className="radio-label">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};