import { SearchIcon } from '../ui/SearchIcon/SearchIcon';
import styles from './styles.module.scss';

export function withSearchIcon<P extends { className?: string }>(
  WrappedComponent: React.ComponentType<P>
) {
  return function SearchInput(props: P) {
    return (
      <div className={`${styles.hocInputWrapper} ${props.className || ''}`}>
        <div className={styles.hocIconContainer}>
          <SearchIcon />
        </div>
        <WrappedComponent {...props} />
      </div>
    );
  };
}