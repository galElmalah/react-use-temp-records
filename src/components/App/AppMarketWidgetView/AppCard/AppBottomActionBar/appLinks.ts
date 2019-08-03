export const appNameToUrlCompatibleText = (appName: string) =>
  appName
    .trim()
    .toLowerCase()
    .split(' ')
    .join('-');

export const getLinkToAppInAppMarket = (appName: string) =>
  `www.wix.com/app-market/${appNameToUrlCompatibleText(appName)}/overview`;
