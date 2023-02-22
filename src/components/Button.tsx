import classNames from 'classnames';
import React, { ReactElement, ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  active?: boolean;
  onClick?: () => void;
  label?: string;
  className?: string;
};

export default function Button({ children, active, onClick, label, className }: ButtonProps): ReactElement {
  return (
    <button
      className={classNames(
        'px-2 rounded-full py-1 ease-linear hover:bg-gray-600 hover:text-white',
        { 'bg-[#6C2BD9] text-white': active, 'text-gray-800': !active },
        className
      )}
      onClick={onClick}
      type="button"
    >
      {label}
      {children}
    </button>
  );
}
