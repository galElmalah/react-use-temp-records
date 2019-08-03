import * as React from 'react';
import * as style from './AppTopSection.scss';
import Badge from 'wix-style-react/Badge';

export const AppTopSection = ({ appIconSrc, badge }: any) => (
  <section className={style.topSection}>
    <img alt={'app icon'} src={appIconSrc} className={style.appIcon} />
    {badge && (
      <Badge dataHook={'app-badge'} type={'outlined'} size={'small'}>
        {badge}
      </Badge>
    )}
  </section>
);
