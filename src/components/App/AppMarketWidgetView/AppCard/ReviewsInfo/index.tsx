import * as React from 'react';
import * as style from './ReviewsInfo.scss';
import Text from 'wix-style-react/Text';
import StarFilled from 'wix-style-react/new-icons/StarFilled';
import Loader from 'wix-style-react/Loader';
import { ReviewsContext } from '../../../ReviewsProvider';

interface ReviewsInfoProps {
  appDefinitionId: string;
}

export const ReviewsInfo = ({ appDefinitionId }: ReviewsInfoProps) => {
  const { isFetching, reviews } = React.useContext(ReviewsContext);
  const currentReview = reviews[appDefinitionId];
  return (
    <div data-hook={'reviews-info'} className={style.reviewsInfoWrapper}>
      {isFetching ? (
        <Loader size="small" />
      ) : (
        <>
          <StarFilled className={style.starIcon} />
          <Text className={style.rating} weight="bold">
            {currentReview.averageRating}
          </Text>
          <Text secondary>{`(${currentReview.totalReviews})`}</Text>
        </>
      )}
    </div>
  );
};
