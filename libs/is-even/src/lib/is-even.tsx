import styles from './is-even.module.css';

/* eslint-disable-next-line */
export interface IsEvenProps {}

export function IsEven(props: IsEvenProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IsEven!</h1>
    </div>
  );
}

export default IsEven;
