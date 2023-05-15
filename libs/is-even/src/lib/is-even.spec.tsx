import { render } from '@testing-library/react';

import IsEven from './is-even';

describe('IsEven', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IsEven />);
    expect(baseElement).toBeTruthy();
  });
});
