
type buttonProps = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
  className: string
}
export const ButtonSearch = ({ title, onClick,className }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {title}
    </button>
  );
};