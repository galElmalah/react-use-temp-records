import * as React from 'react';
import * as style from './ReviewsInfo.scss';
import Text from 'wix-style-react/Text';
import StarFilled from 'wix-style-react/new-icons/StarFilled';

interface ReviewsInfoProps {
  rating: string;
  numberOfReviews: number;
}

export const ReviewsInfo = ({ rating, numberOfReviews }: ReviewsInfoProps) => {
  return (
    <div data-hook={'reviews-info'} className={style.reviewsInfoWrapper}>
      <StarFilled className={style.starIcon} />
      <Text className={style.rating} weight="bold">
        {rating}
      </Text>
      <Text secondary>{`(${Math.ceil(
        numberOfReviews * (Math.random() + 1),
      )})`}</Text>
    </div>
  );
};
