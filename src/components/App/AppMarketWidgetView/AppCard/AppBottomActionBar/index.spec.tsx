import * as React from 'react';
import { mount } from 'enzyme';
import { AppBottomActionBar } from '.';
import {
  buttonTestkitFactory,
  textTestkitFactory as enzymeTextTestkitFactory,
} from 'wix-style-react/dist/testkit/enzyme';

const textTestKit = (wrapper, dataHook) =>
  enzymeTextTestkitFactory({ wrapper, dataHook });
const btnTestKit = wrapper =>
  buttonTestkitFactory({ wrapper, dataHook: 'cta-button' });

describe('AppBottomActionBar', () => {
  const assertInstalledView = async wrapper => {
    expect(await btnTestKit(wrapper).getButtonTextContent()).toBe('Open');
    expect(wrapper.find('svg').exists()).toBeTruthy();
    expect(textTestKit(wrapper, 'installed-text').getText()).toBe('Installed');
  };
  it('should display installed state correctly -> "Open" text in CTA  and V icon with "installed" text', async () => {
    const wrapper = mount(<AppBottomActionBar isInstalled={true} />);
    await assertInstalledView(wrapper);
  });

  it('should display sale state correctly -> "Get" text in CTA and sale details', async () => {
    const saleAmount = 25;
    const wrapper = mount(<AppBottomActionBar sale={saleAmount} />);
    expect(await btnTestKit(wrapper).getButtonTextContent()).toBe('Get');
    expect(wrapper.find('svg').exists()).toBeFalsy();
    expect(textTestKit(wrapper, 'installed-text').exists()).toBeFalsy();

    expect(textTestKit(wrapper, 'sale-text').getText()).toBe(
      `${saleAmount}% SALE`,
    );
  });

  it('if there is no sale and the app is not installed then it should show the info', async () => {
    const info = 'test-info';
    const wrapper = mount(<AppBottomActionBar info={info} />);
    expect(await btnTestKit(wrapper).getButtonTextContent()).toBe('Get');
    expect(textTestKit(wrapper, 'info-text').getText()).toBe(info);
  });

  it('should prioritize the installed view', async () => {
    const wrapper = mount(
      <AppBottomActionBar sale={25} isInstalled={true} info={'free/premium'} />,
    );
    await assertInstalledView(wrapper);
  });

  it('should show the buisness model in a human readable display', () => {
    const wrapper = mount(
      <AppBottomActionBar isInstalled={false} info={'FREEMIUM'} />,
    );
    expect(textTestKit(wrapper, 'info-text').getText()).toBe('Free / Premium');
  });
});
