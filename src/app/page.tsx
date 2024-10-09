import Button from '@/components/common/Button';
import { ButtonColorEnum } from '@/components/common/Button/buttonEnum';

export default function Home() {
  return (
    <div className="bg-primary_test h-dvh w-dvw font-[family-name:var(--font-space-grotesk)]">
      <Button buttonBgColor={ButtonColorEnum.DARK} buttonTextColor={ButtonColorEnum.WHITE} />
      {/* <Action actionType={ActionTypeEnum.MINUS} />
      <ArrowLink
        linkType={ArrowLinkTypeEnum.FILLED}
        arrowColor={ArrowLinkColorEnum.DARK}
        arrowBgColor={ArrowLinkColorEnum.GREEN}
        labelText={'Label'}
        labelTextColor={ArrowLinkColorEnum.BLACK}
      /> */}
    </div>
  );
}

{
  /* <div className="bg-primary_test h-dvh w-dvw font-[family-name:var(--font-space-grotesk)]"> */
}
