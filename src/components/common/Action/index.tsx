// types
import type { FC } from 'react';

// enums
import Image from 'next/image';

// enums
import { ActionTypeEnum } from './actionEnum';

const Action: FC<{ actionType: ActionTypeEnum }> = ({ actionType = ActionTypeEnum.PLUS }) => {
  if (actionType == ActionTypeEnum.PLUS) {
    return (
      <div className="grid h-[58px] w-[58px] place-content-center rounded-full border-[1px] border-primary-dark bg-primary-grey">
        <Image height={25.08} width={25.08} src={'/assets/images/svg/plus_action.svg'} alt="plus" />
      </div>
    );
  }
  return (
    <div className="grid h-[58px] w-[58px] place-content-center rounded-full border-[1px] border-primary-dark bg-primary-grey">
      <Image height={25.08} width={25.08} src={'/assets/images/svg/minus_action.svg'} alt="minus" />
    </div>
  );
};

export default Action;
