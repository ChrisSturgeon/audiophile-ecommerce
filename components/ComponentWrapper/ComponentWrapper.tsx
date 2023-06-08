import styles from './ComponentWrapper.module.css';

interface Props {
  children: React.ReactNode;
}

export default function ComponentWrapper({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>;
}
