import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { AppDetails } from '.';
import { textTestkitFactory as enzymeTextTestkitFactory } from 'wix-style-react/dist/testkit/enzyme';

describe('AppDetails', () => {
  it('should show the developer details if there is a developer', () => {
    const wrapper: ReactWrapper = mount(<AppDetails />);
    const devDetailsTextTestKit = () =>
      enzymeTextTestkitFactory({ wrapper, dataHook: 'dev-details' });
    expect(devDetailsTextTestKit().exists()).toBeFalsy();
    const website = 'test.com';
    const name = 'gal';
    wrapper.setProps({ developedBy: { name, website } });
    expect(devDetailsTextTestKit().exists()).toBeTruthy();
    expect(devDetailsTextTestKit().getText()).toBe(
      `By <a href="${website}">${name}</a>`,
    );
  });

  it('should show the the reviews & ratings section only if the app is NOT installed', () => {
    const wrapper: ReactWrapper = mount(<AppDetails isInstalled={true} />);
    expect(wrapper.find('[data-hook="reviews-info"]').exists()).toBeFalsy();
    wrapper.setProps({ isInstalled: false });
    expect(wrapper.find('[data-hook="reviews-info"]').exists()).toBeTruthy();
  });

  it('should show the description and title', () => {
    const title = 'test-title';
    const description = 'test-description';
    const wrapper: ReactWrapper = mount(
      <AppDetails isInstalled={true} title={title} description={description} />,
    );
    const descriptionTextTestKit = () =>
      enzymeTextTestkitFactory({ wrapper, dataHook: 'app-description' });
    expect(wrapper.find('h3').text()).toBe(title);
    expect(descriptionTextTestKit().getText()).toBe(description);
  });
});
