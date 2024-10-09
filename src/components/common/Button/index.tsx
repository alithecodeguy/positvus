// types
import type { FC } from 'react';

// enums
import { ButtonColorEnum } from './buttonEnum';

// libraries
import { twMerge } from 'tailwind-merge';

const Button: FC<{
  buttonText?: string;
  buttonTextColor?: ButtonColorEnum.WHITE | ButtonColorEnum.BLACK;
  buttonBgColor?: ButtonColorEnum.DARK | ButtonColorEnum.GREEN | ButtonColorEnum.INHERIT;
}> = ({
  buttonText = 'Placeholder',
  buttonTextColor = ButtonColorEnum.DARK,
  buttonBgColor = ButtonColorEnum.INHERIT
}) => {
  return (
    <button
      className={twMerge(
        'rounded-[14px] px-[35px] py-[20px] text-[20px] font-normal',

        buttonTextColor == ButtonColorEnum.WHITE ? 'text-primary-white' : '',
        buttonTextColor == ButtonColorEnum.BLACK ? 'text-primary-black' : '',
        buttonBgColor == ButtonColorEnum.DARK ? 'bg-primary-dark' : '',
        buttonBgColor == ButtonColorEnum.GREEN ? 'bg-primary-green' : '',
        buttonBgColor == ButtonColorEnum.INHERIT ? 'border border-primary-dark bg-inherit' : ''
      )}
    >
      {buttonText}
    </button>
  );
};

export default Button;
