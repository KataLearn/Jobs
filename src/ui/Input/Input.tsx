
import styles from './styles.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: string;
    className?: string; 
}

export const Input = ({
    placeholder,
    onChange,
    name,
    value,
    className, 
    ...rest
}: InputProps) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            value={value}
            className={`${styles.baseInput} ${className || ''}`}
            {...rest}
        />
    );
};


