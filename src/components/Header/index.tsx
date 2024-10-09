// types
import type { FC } from 'react';

// components
import Logo from '../common/Logo';

// enums
import { LogoThemeEnum } from '../common/Logo/logoEnum';

const Header: FC = () => {
  return (
    <div>
      <Logo logoTheme={LogoThemeEnum.DARK} />
    </div>
  );
};

export default Header;
