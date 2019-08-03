import { appNameToUrlCompatibleText } from './appLinks';

describe('appNameToUrlCompatibleText', () => {
  it('should transform the appName correctly', () => {
    const keyValuePairs = [
      ['myApp', 'myapp'],
      ['some App   ', 'some-app'],
      ['  Some CraZy ApP  ', 'some-crazy-app'],
    ];
    keyValuePairs.forEach(([input, expectedOutput]) =>
      expect(appNameToUrlCompatibleText(input)).toBe(expectedOutput),
    );
  });
});
