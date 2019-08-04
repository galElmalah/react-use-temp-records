import * as React from 'react';
import * as style from './AppMarketWidgetView.scss';
import { App, ViewTypes, Skin } from './types';
import { AppCard } from './AppCard';

interface AppMarketWidgetViewProps {
  apps?: App[];
  view?: ViewTypes;
  skin: Skin;
}

const getBusinessModel = appFields =>
  appFields.packagePickerV2 && appFields.packagePickerV2[0].model.businessModel;

const toAppCard = props => (
  { appIcon, name, teaser, premiumOnly, appFields, appDefinitionId },
  i,
) => (
  <AppCard
    appDefinitionId={appDefinitionId}
    premiumOnly={premiumOnly}
    appIcon={appIcon}
    name={name}
    skin={props.skin}
    position={i}
    key={appDefinitionId}
    teaser={teaser}
    businessModel={getBusinessModel(appFields) || 'FREE'}
  />
);

export const AppMarketWidgetView = (props: AppMarketWidgetViewProps) => {
  return (
    <section className={style.widgetWrapper}>
      {props.apps.map(toAppCard(props))}
    </section>
  );
};
