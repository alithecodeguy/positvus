// components
import Action from '@/components/common/Action';

// enums
import { ActionTypeEnum } from '@/components/common/Action/actionEnum';

export default function Home() {
  return (
    <div className="bg-primary_test h-dvh w-dvw font-[family-name:var(--font-space-grotesk)]">
      <Action actionType={ActionTypeEnum.MINUS} />
    </div>
  );
}

{
  /* <div className="bg-primary_test h-dvh w-dvw font-[family-name:var(--font-space-grotesk)]"> */
}
