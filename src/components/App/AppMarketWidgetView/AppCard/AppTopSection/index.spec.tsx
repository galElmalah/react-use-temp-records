import * as React from 'react';
import { mount } from 'enzyme';
import { AppTopSection } from '.';
import { badgeTestkitFactory as enzymeBadgeTestkitFactory } from 'wix-style-react/dist/testkit/enzyme';

const badgeTestKit = wrapper =>
  enzymeBadgeTestkitFactory({ wrapper, dataHook: 'app-badge' });

describe('AppTopSection', () => {
  it('display an image', () => {
    const appIconSrc = 'appIconSrc';
    const wrapper = mount(<AppTopSection appIcon={appIconSrc} />);
    expect(wrapper.find('img').exists()).toBeTruthy();
    expect(wrapper.find('img').props().src).toBe(appIconSrc);
    expect(badgeTestKit(wrapper).exists()).toBeFalsy();
  });

  it('should display tag only if there is one', () => {
    const badge = 'new';
    const wrapper = mount(<AppTopSection badge={badge} />);
    expect(badgeTestKit(wrapper).exists()).toBeTruthy();
    expect(badgeTestKit(wrapper).text()).toBe(badge);
  });
});
