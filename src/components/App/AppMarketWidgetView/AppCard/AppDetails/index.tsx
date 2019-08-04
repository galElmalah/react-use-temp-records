import * as React from 'react';
import * as style from './AppDetails.scss';
import Text from 'wix-style-react/Text';
import { ReviewsInfo } from '../ReviewsInfo';

export const AppDetails = ({
  teaser,
  name,
  isInstalled,
  appDefinitionId,
}: any) => {
  return (
    <article className={style.appDetails}>
      <h3>{name}</h3>
      <Text
        dataHook={'app-teaser'}
        size={'small'}
        secondary
        className={style.teaser}
      >
        {teaser}
      </Text>
      {!isInstalled && <ReviewsInfo appDefinitionId={appDefinitionId} />}
    </article>
  );
};
//@ts-ignore
AppDetails.displayName = 'AppDetails';
