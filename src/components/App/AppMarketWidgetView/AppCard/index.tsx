import * as React from 'react';
import * as style from './AppCard.scss';
import { App, Skin, BusinessModel } from '../types';
import { AppTopSection } from './AppTopSection';
import { useListItemAnimation } from '../../../useListItemAnimation';
import { AppDetails } from './AppDetails/index';
import classnames from 'classnames';
import { AppBottomActionBar } from './AppBottomActionBar/index';
import { getLinkToAppInAppMarket } from './AppBottomActionBar/appLinks';
interface AppCardProps extends Partial<App> {
  position: number;
  skin?: Skin;
  businessModel?: BusinessModel;
  badge?: string;
}

// should be synced with the css opacity transition duration
const ANIMATION_BASE_DELAY = 175;

export const AppCard = ({
  position,
  skin = 'normal',
  name,
  teaser,
  appIcon,
  premiumOnly,
  businessModel,
  appDefinitionId,
  badge,
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
      <AppTopSection appIcon={appIcon} badge={badge} />
      <AppDetails
        appDefinitionId={appDefinitionId}
        name={name}
        teaser={teaser}
      />
      <div className={style.separator} />
      <AppBottomActionBar
        info={premiumOnly ? 'Premiun site only' : businessModel}
      />
    </div>
  );
};
