import * as React from 'react';
import { AppMarketWidgetView } from '../AppMarketWidgetView/index';
import { ViewTypes, Skin } from '../AppMarketWidgetView/types';
import { useFetch } from '../../useFetch';

interface AppMarketWidgetProps {
  collectionName: string;
  view?: ViewTypes;
  skin?: Skin;
}

export const AppMarketWidgetContainer = ({
  collectionName,
  view,
  skin,
  ...props
}: AppMarketWidgetProps) => {
  const { error, response, isFetching } = useFetch('fakeUrl');
  return <AppMarketWidgetView {...props} />;
};
