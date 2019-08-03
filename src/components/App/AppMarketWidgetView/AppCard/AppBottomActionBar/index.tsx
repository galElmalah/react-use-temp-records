import * as React from 'react';
import * as style from './AppBottomActionBar.scss';
import Text from 'wix-style-react/Text';
import Button from 'wix-style-react/Button';
import StatusCompleteFilled from 'wix-style-react/new-icons/StatusCompleteFilled';

interface AppBottomActionBarProps {
  sale?: number | string;
  isInstalled?: boolean;
  info?: string;
}
export const AppBottomActionBar = ({
  sale,
  isInstalled,
  info,
}: AppBottomActionBarProps) => {
  const getRightSideView = () => {
    if (isInstalled) {
      return (
        <span className={style.installedView}>
          <StatusCompleteFilled className={style.installedIcon} />
          <Text
            weight={'bold'}
            size={'tiny'}
            skin="success"
            dataHook={'installed-text'}
          >
            Installed
          </Text>
        </span>
      );
    }
    if (sale) {
      return (
        <Text
          size={'tiny'}
          weight={'bold'}
          dataHook={'sale-text'}
          className={style.saleText}
        >
          {`${sale}% SALE`}
        </Text>
      );
    }
    return (
      <Text weight={'bold'} size={'small'} dataHook={'info-text'}>
        {info}
      </Text>
    );
  };
  return (
    <div className={style.bottomSectionWrapper}>
      {getRightSideView()}
      <Button dataHook={'cta-button'} size="small">
        <Text light size={'small'} dataHook={'info-text'}>
          {isInstalled ? 'Open' : 'Get'}
        </Text>
      </Button>
    </div>
  );
};
