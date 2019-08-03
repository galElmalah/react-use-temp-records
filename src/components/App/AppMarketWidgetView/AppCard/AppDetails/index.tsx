import * as React from 'react';
import * as style from './AppDetails.scss';
import Text from 'wix-style-react/Text';
import { ReviewsInfo } from '../ReviewsInfo';

export const AppDetails = ({
  developedBy,
  description,
  name,
  isInstalled,
}: any) => {
  const getDeveloperText = () => (
    <Text
      onClick={(e: MouseEvent) => e.stopPropagation()}
      size={'tiny'}
      secondary
      dataHook={'dev-details'}
    >
      By{' '}
      <a href={developedBy.website} target="_blank">
        {developedBy.name}
      </a>
    </Text>
  );

  return (
    <article className={style.appDetails}>
      <h3>{name}</h3>
      {developedBy && getDeveloperText()}
      <Text
        dataHook={'app-description'}
        size={'small'}
        secondary
        className={style.description}
      >
        {description}
      </Text>
      {!isInstalled && <ReviewsInfo rating={'4.7'} numberOfReviews={261} />}
    </article>
  );
};
