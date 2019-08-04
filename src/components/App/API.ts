export const getCollectionUrl = collection =>
  `https://www.wix.com/_api/app-market-api/categories/${collection}/apps?dashboard=false&lang=en&limit=48&offset=0&exclude=editor_1.4_incompatible,ecommerce_old&fields=appDefinitionId,appType,by,downloadsAllTime,externalPremium,frontPageImage,hasDashboard,hasMobile,hasPremium,isTrial,isWixLabs,name,premiumOnly,publishedAt,slug,teaser,widgets,wixComponentId,isWixComponent,appType,hasSection,dashboard,overrideDashboardUrl,listWidgetId,price,hideAppFirstTimeMsg,roundIcon,appIcon,overrideDashboardLink,listedInMarket,appFields,packages,trialDays,price`;

export const reviewsUrl = 'https://www.wix.com/_api/reviews-server/v1/products';
