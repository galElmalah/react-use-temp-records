import * as React from 'react';
import { translate, InjectedTranslateProps } from 'react-i18next';
import * as s from './App.scss';
import { AppMarketWidgetContainer } from './AppMarketWidgetContainer';

interface AppProps extends InjectedTranslateProps {}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className={s.root}>
        <AppMarketWidgetContainer collectionName={'analytics'} />
      </div>
    );
  }
}

export default translate()(App);
