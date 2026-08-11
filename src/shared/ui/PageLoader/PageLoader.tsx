import clsx from 'clsx'
import styles from './PageLoader.module.scss'
import { Loader } from '../Loader/Loader';
export const PageLoader = () => {
  return (
    <span className={clsx(styles.pageLoader)} >
      <Loader/>
    </span>
  );
};