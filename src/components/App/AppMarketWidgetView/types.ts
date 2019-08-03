export type ViewTypes = 'normal' | 'carousel';
export type Skin = 'transparent' | 'normal';

export interface Developer {
  name: string;
  website?: string;
}
export interface App {
  id: string;
  metaTag: string;
  description: string;
  name: string;
  thumbnailUrl: string;
  rating: string;
  numberOfReviews: number;
  developedBy?: Developer;
}
