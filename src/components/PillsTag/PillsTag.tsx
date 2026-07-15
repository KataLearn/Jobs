
import styles from './styles.module.scss';

type Pills = {
    tag: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const PillsTag = ({ tag, onClick }: Pills) => {
    return (
        <div className={styles.pill}>
            <span>{tag}</span>
            <button 
                type="button" 
                onClick={onClick} 
                className={styles.deleteBtn}
                aria-label={`Удалить навык ${tag}`}
            >
                &times;
            </button>
        </div>
    )
}