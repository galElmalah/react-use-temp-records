import * as React from 'react';
import { AppMarketWidgetView } from '../AppMarketWidgetView/index';
import { ViewTypes, Skin, App } from '../AppMarketWidgetView/types';
import { useFetch } from '../../useFetch';
import { getCollectionUrl } from '../API';
import Loader from 'wix-style-react/Loader';

const apps = require('../../__mocks__/fakeCollectionData.json');

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
  const { response, isFetching } = useFetch<App[]>(
    getCollectionUrl('analytics'),
    { fakeData: apps },
  );
  if (isFetching) {
    return <Loader size="large" />;
  }
  return (
    <AppMarketWidgetView {...props} apps={response} skin={skin || 'normal'} />
  );
};
