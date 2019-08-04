import { BusinessModel } from '../../types';

export const toHumanReadable = (text: BusinessModel | string): string =>
  ({
    FREEMIUM: 'Free / Premium',
    FREE: 'Free',
    PREMIUM: 'Premium',
  }[text] || text);
