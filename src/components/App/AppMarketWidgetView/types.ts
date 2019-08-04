export type ViewTypes = 'normal' | 'carousel';
export type Skin = 'transparent' | 'normal';

export type BusinessModel = 'FREEMIUM' | 'PREMIUM' | 'FREE';

export interface App {
  appDefinitionId: string;
  metaTag: string;
  teaser: string;
  name: string;
  thumbnailUrl: string;
  rating: string;
  numberOfReviews: number;
  appIcon: string;
  premiumOnly: boolean;
  appFields: {
    packagePickerV2?: {
      model: { businessModel: BusinessModel };
    }[];
  };
}
