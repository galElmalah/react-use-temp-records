import * as React from 'react';
import * as style from './AppDetails.scss';
import Text from 'wix-style-react/Text';
import { ReviewsInfo } from '../ReviewsInfo';

export const AppDetails = ({
  developedBy,
  description,
  title,
  isInstalled,
}: any) => {
  const getDeveloperText = () => (
    <Text size={'tiny'} secondary dataHook={'dev-details'}>
      By <a href={developedBy.website}>{developedBy.name}</a>
    </Text>
  );

  return (
    <article className={style.appDetails}>
      <h3>{title}</h3>
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
