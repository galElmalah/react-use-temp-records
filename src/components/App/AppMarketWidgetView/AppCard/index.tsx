import * as React from 'react';
import * as style from './AppCard.scss';
import { App, Skin } from '../types';
import { AppTopSection } from './AppTopSection';
import { useListItemAnimation } from '../../../useListItemAnimation';
import { AppDetails } from './AppDetails/index';
import classnames from 'classnames';
import { AppBottomActionBar } from './AppBottomActionBar/index';
import { getLinkToAppInAppMarket } from './AppBottomActionBar/appLinks';
interface AppCardProps extends Partial<App> {
  position: number;
  skin?: Skin;
}

// should be synced with the css opacity transition duration
const ANIMATION_BASE_DELAY = 175;

export const AppCard = ({
  position,
  skin = 'normal',
  name,
  ...props
}: AppCardProps) => {
  const [startAnimation] = useListItemAnimation(position, ANIMATION_BASE_DELAY);
  const goToAppPage = e => {
    window.open(getLinkToAppInAppMarket(name), '_blank');
  };
  return (
    <div
      onClick={goToAppPage}
      className={classnames({
        [style.appCardWrapper]: true,
        [style.entered]: startAnimation,
        [style[skin.toLowerCase()]]: true,
        [style.small]: true,
      })}
    >
      <AppTopSection badge={Math.random() > 0.5 ? 'editor choice' : 'new'} />
      <AppDetails
        developedBy={props.developedBy}
        name={'Site Booster'}
        description={
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nesciunt ipsam ut expedita nobis. Doloribus, quo? Ipsam earum, laudantium totam possimus officia corrupti provident eaque porro rerum veniam, quo ad.'
        }
      />
      <div className={style.separator} />
      <AppBottomActionBar info={'Premiun site only'} />
    </div>
  );
};
