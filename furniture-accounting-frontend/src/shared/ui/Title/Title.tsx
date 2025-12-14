import cn from 'classnames';
import { createElement } from 'react';

import styles from './Title.module.css';
import type { TitleProps } from './Title.type';

export function Title({
  children,
  className,
  color = 'black',
  tag,
  size,
}: TitleProps) {
  return createElement(
    tag,
    {
      className: cn(styles[size], styles[color], className),
    },
    children
  );
}
