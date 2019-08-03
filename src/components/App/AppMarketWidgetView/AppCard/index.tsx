import * as React from 'react';
import * as style from './AppCard.scss';
import { App } from '../types';
import { AppTopSection } from './AppTopSection';
import { useListAnimation } from '../../../useListAnimation';
import { AppDetails } from './AppDetails/index';
import classnames from 'classnames';
import { AppBottomActionBar } from './AppBottomActionBar/index';

type Skin = 'transparent' | 'normal';

interface AppCardProps extends Partial<App> {
  position: number;
  skin?: Skin;
}

// should be synced with the css opacity transition duration
const ANIMATION_BASE_DELAY = 175;

export const AppCard = ({
  position,
  skin = 'normal',
  ...props
}: AppCardProps) => {
  const [startAnimation] = useListAnimation(position, ANIMATION_BASE_DELAY);

  return (
    <div
      className={classnames({
        [style.appCardWrapper]: true,
        [style.entered]: startAnimation,
        [style[skin.toLowerCase()]]: true,
      })}
    >
      <AppTopSection badge={Math.random() > 0.5 ? 'editor choice' : 'new'} />
      <AppDetails
        developedBy={props.developedBy}
        title={'Site Booster'}
        description={
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nesciunt ipsam ut expedita nobis. Doloribus, quo? Ipsam earum, laudantium totam possimus officia corrupti provident eaque porro rerum veniam, quo ad.'
        }
      />
      <div className={style.separator} />
      <AppBottomActionBar isInstalled info={'Premiun site only'} />
    </div>
  );
};
