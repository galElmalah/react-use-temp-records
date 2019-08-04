import * as React from 'react';
import { useFetch } from '../useFetch/index';
import { reviewsUrl } from './API';

const fakeReviews = require('../__mocks__/fakeReviews.json');

interface Review {
  id: string;
  totalReviews: number;
  averageRating: number;
}

interface ReviewContextValue {
  reviews: Dictionary<Review>;
  isFetching: boolean;
}

interface Dictionary<T> {
  [key: string]: T;
}
export const ReviewsContext = React.createContext<ReviewContextValue | any>({});

const normalizeById = data => {
  const aggregator = {};
  data.forEach((review: Review) => {
    review.id && (aggregator[review.id] = review);
  });
  return aggregator;
};

export const ReviewsProvider = ({ children }) => {
  const { isFetching, response } = useFetch<Review[]>(reviewsUrl, {
    fakeData: fakeReviews,
    transformer: normalizeById,
  });

  return (
    <ReviewsContext.Provider value={{ reviews: response, isFetching }}>
      {children}
    </ReviewsContext.Provider>
  );
};
