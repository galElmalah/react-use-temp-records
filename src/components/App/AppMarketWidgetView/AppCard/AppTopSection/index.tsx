import * as React from 'react';
import * as style from './AppTopSection.scss';
import Badge from 'wix-style-react/Badge';

interface AppTopSectionProps {
  appIcon?: string;
  badge?: string;
}
export const AppTopSection = ({ appIcon, badge }: AppTopSectionProps) => (
  <section className={style.topSection}>
    <img
      alt={'app icon'}
      src={
        appIcon ||
        '//static.wixstatic.com/media/108593229ec6574bea3591acdad5594f3fe8aa7a4.png_srz_60_60_85_22_0.50_1.20_0.00_png_srz'
      }
      className={style.appIcon}
    />
    {badge && (
      <Badge dataHook={'app-badge'} type={'outlined'} size={'medium'}>
        {badge}
      </Badge>
    )}
  </section>
);
