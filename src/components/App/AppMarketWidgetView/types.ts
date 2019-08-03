export type ViewTypes = 'normal' | 'carousel';

export interface Developer {
  name: string;
  website?: string;
}
export interface App {
  id: string;
  metaTag: string;
  description: string;
  title: string;
  thumbnailUrl: string;
  rating: string;
  numberOfReviews: number;
  developedBy?: Developer;
}
