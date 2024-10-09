// types
import type { FC } from 'react';

// enums
import { LogoThemeEnum } from './logoEnum';

// libraries
import Image from 'next/image';

const Logo: FC<{ logoTheme: LogoThemeEnum }> = ({ logoTheme = LogoThemeEnum.LIGHT }) => {
  if (logoTheme == LogoThemeEnum.LIGHT) {
    return (
      <Image
        height={36}
        width={219.54}
        src={'/assets/images/svg/logo_light.svg'}
        alt="light logo"
      />
    );
  }

  return (
    <Image height={36} width={219.54} src={'/assets/images/svg/logo_dark.svg'} alt="dark logo" />
  );
};

export default Logo;
