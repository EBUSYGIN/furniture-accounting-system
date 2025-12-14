import { Icon } from '@/shared/ui';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Комфорт</h1>
        <Icon.Logo className={styles.icon} />
      </div>

      <div className={styles.userInfo}>
        <Icon.Notifications />
        <span className={styles.userName}>Admin</span>
      </div>
    </header>
  );
}
