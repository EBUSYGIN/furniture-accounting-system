import { NavLink } from 'react-router';
import cn from 'classnames';
import { Icon } from '@/shared/ui';

import styles from './Menu.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <div className={styles.title}>Главное меню</div>
      <ul className={styles.list}>
        <NavLink
          className={({ isActive }) =>
            cn(styles.link, { [styles.active]: isActive })
          }
          to='/'
        >
          <Icon.ProductsList />
          Главная
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            cn(styles.link, { [styles.active]: isActive })
          }
          to='/workshops'
        >
          <Icon.Workshop />
          Цеха
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            cn(styles.link, { [styles.active]: isActive })
          }
          to='/calculator'
        >
          <Icon.OrderCalc />
          Калькулятор
        </NavLink>
      </ul>
    </nav>
  );
}
