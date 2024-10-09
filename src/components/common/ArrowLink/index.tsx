// types
import type { FC } from 'react';

// libraries
import { twMerge } from 'tailwind-merge';

// enums
import { ArrowLinkColorEnum, ArrowLinkTypeEnum } from './arrowLinkEmum';

// components
import Arrow from './components/Arrow';

const ArrowLink: FC<{
  linkType?: ArrowLinkTypeEnum;
  arrowColor?: ArrowLinkColorEnum;
  arrowBgColor?: ArrowLinkColorEnum;
  labelText?: string;
  labelTextColor?: ArrowLinkColorEnum;
}> = ({
  linkType = ArrowLinkTypeEnum.FILLED,
  arrowColor = ArrowLinkColorEnum.GREY,
  arrowBgColor = ArrowLinkColorEnum.GREEN,
  labelText = 'PlaceHolder',
  labelTextColor = ArrowLinkColorEnum.DARK
}) => {
  if (linkType == ArrowLinkTypeEnum.FILLED) {
    return (
      <div className="flex items-center gap-[15px]">
        <div
          className={twMerge(
            'grid h-[41px] w-[41px] place-content-center rounded-full',
            arrowBgColor == ArrowLinkColorEnum.GREY ? 'bg-primary-grey' : '',
            arrowBgColor == ArrowLinkColorEnum.DARK ? 'bg-primary-dark' : '',
            arrowBgColor == ArrowLinkColorEnum.GREEN ? 'bg-primary-green' : '',
            arrowBgColor == ArrowLinkColorEnum.BLACK ? 'bg-primary-black' : '',
            arrowColor == ArrowLinkColorEnum.GREY ? 'text-primary-grey' : '',
            arrowColor == ArrowLinkColorEnum.DARK ? 'text-primary-dark' : '',
            arrowColor == ArrowLinkColorEnum.GREEN ? 'text-primary-green' : '',
            arrowColor == ArrowLinkColorEnum.BLACK ? 'text-primary-black' : ''
          )}
        >
          <Arrow />
        </div>
        <span
          className={twMerge(
            'text-[20px] font-normal',
            labelTextColor == ArrowLinkColorEnum.GREY ? 'text-primary-grey' : '',
            labelTextColor == ArrowLinkColorEnum.DARK ? 'text-primary-dark' : '',
            labelTextColor == ArrowLinkColorEnum.GREEN ? 'text-primary-green' : '',
            labelTextColor == ArrowLinkColorEnum.BLACK ? 'text-primary-black' : ''
          )}
        >
          {labelText}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-[15px]">
      <span
        className={twMerge(
          'text-[20px] font-normal',
          labelTextColor == ArrowLinkColorEnum.GREY ? 'text-primary-grey' : '',
          labelTextColor == ArrowLinkColorEnum.DARK ? 'text-primary-dark' : '',
          labelTextColor == ArrowLinkColorEnum.GREEN ? 'text-primary-green' : '',
          labelTextColor == ArrowLinkColorEnum.BLACK ? 'text-primary-black' : ''
        )}
      >
        {labelText}
      </span>
      <div
        className={twMerge(
          arrowColor == ArrowLinkColorEnum.GREY ? 'text-primary-grey' : '',
          arrowColor == ArrowLinkColorEnum.DARK ? 'text-primary-dark' : '',
          arrowColor == ArrowLinkColorEnum.GREEN ? 'text-primary-green' : '',
          arrowColor == ArrowLinkColorEnum.BLACK ? 'text-primary-black' : ''
        )}
      >
        <Arrow />
      </div>
    </div>
  );
};

export default ArrowLink;
