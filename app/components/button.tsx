import { FC } from "react";

export type ButtonProps = {
    label: string;
    color: string;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({ label, color, onClick }) => {

    const className = `bg-${color}-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-${color}-600`;
    return (
        <button 
            className={className} 
            onClick={onClick}
        >
            {label}
        </button>
    )
};

export default Button;