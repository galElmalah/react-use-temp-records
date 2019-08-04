import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { AppDetails } from '.';
import { textTestkitFactory as enzymeTextTestkitFactory } from 'wix-style-react/dist/testkit/enzyme';
import { ReviewsContext } from '../../../ReviewsProvider';
const reviewsValue = {
  reviews: {
    key: { totalReviews: 3, averageRating: 2 },
  },
  isFetching: false,
};
describe('AppDetails', () => {
  it('should show the the reviews & ratings section only if the app is NOT installed', () => {
    let wrapper: ReactWrapper = mount(
      <ReviewsContext.Provider value={reviewsValue}>
        <AppDetails appDefinitionId={'key'} isInstalled={true} />
      </ReviewsContext.Provider>,
    );
    expect(wrapper.find('[data-hook="reviews-info"]').exists()).toBeFalsy();

    wrapper = mount(
      <ReviewsContext.Provider value={reviewsValue}>
        <AppDetails appDefinitionId={'key'} isInstalled={false} />
      </ReviewsContext.Provider>,
    );
    expect(wrapper.find('[data-hook="reviews-info"]').exists()).toBeTruthy();
  });

  it('should show the teaser and title', () => {
    const name = 'test-name';
    const teaser = 'test-teaser';
    const wrapper: ReactWrapper = mount(
      <AppDetails isInstalled={true} name={name} teaser={teaser} />,
    );
    const descriptionTextTestKit = () =>
      enzymeTextTestkitFactory({ wrapper, dataHook: 'app-teaser' });
    expect(wrapper.find('h3').text()).toBe(name);
    expect(descriptionTextTestKit().getText()).toBe(teaser);
  });
});
