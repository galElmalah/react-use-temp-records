import * as React from 'react';
import { translate, InjectedTranslateProps } from 'react-i18next';
import * as s from './App.scss';
import { AppMarketWidgetView } from './AppMarketWidgetView';

interface AppProps extends InjectedTranslateProps { }

class App extends React.Component<AppProps> {
  render() {
    const { t } = this.props;

    return (
      <div className={s.root}>
        <h2 className={s.title}>{t('app.title')}</h2>
        <AppMarketWidgetView />
      </div>
    );
  }
}

export default translate()(App);
