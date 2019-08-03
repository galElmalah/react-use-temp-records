import * as React from 'react';
import * as style from './AppMarketWidgetView.scss';
import { App, ViewTypes, Skin } from './types';
import { AppCard } from './AppCard';

interface AppMarketWidgetViewProps {
  apps?: App[];
  view?: ViewTypes;
  skin?: Skin;
}

const arr = new Array(10).fill(1);
export const AppMarketWidgetView = (props: AppMarketWidgetViewProps) => {
  return (
    <section className={style.widgetWrapper}>
      {arr.map((v, i) => (
        <AppCard
          name={'site Booster'}
          skin={props.skin}
          position={i}
          key={i}
          developedBy={{ name: 'someAwesomeCompany', website: 'google.com' }}
        />
      ))}
    </section>
  );
};
