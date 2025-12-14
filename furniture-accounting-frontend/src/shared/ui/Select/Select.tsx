import cn from 'classnames';

import { Select as HeadlessUISelect, Field, Label } from '@headlessui/react';

import styles from './Select.module.css';
import { Icon } from '../Icon/Icon';
import type { SelectProps } from './Select.types';

export const Select = ({
  className,
  optionsItems,
  error,
  label,
  icon,
  valueToReturn,
  onChange,
  ...props
}: SelectProps) => {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <Field className={cn(className, styles.selectBox)}>
      {error && <span className={styles.error}>{error}</span>}
      {label && (
        <Label className={styles.label}>
          {label}
          {IconComponent && <IconComponent />}
        </Label>
      )}
      <HeadlessUISelect
        className={styles.select}
        onChange={onChange}
        {...props}
      >
        {optionsItems.map((option) => (
          <option
            key={option.id}
            value={valueToReturn === 'id' ? option.id : option.name}
          >
            {option.name}
          </option>
        ))}
      </HeadlessUISelect>
    </Field>
  );
};
