import classNames from "classnames";

type Props = {
    title: string;
    className?: string;
    variant?: 'light' | 'dark';
}

export function Button({ title, className, variant = 'dark' }: Props) {
    return (
        <button
            className={classNames([
                'bg-evergreen-light px-6 py-3 rounded-lg shadow  font-medium mt-3',
                variant === 'dark' && 'bg-evergreen-light text-white',
                variant === 'light' && 'bg-white border-2 border-evergreen-light text-evergreen-light',
                className,
            ])}
        >
            {title}
        </button>
    )
}