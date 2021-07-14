import { Common } from '../src/Common';

test('My Greeter', () => {
  expect(Common.getVersion()).toBe('Branch version');
});