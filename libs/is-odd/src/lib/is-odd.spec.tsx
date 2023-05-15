import { render } from '@testing-library/react';

import IsOdd from './is-odd';

describe('IsOdd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IsOdd />);
    expect(baseElement).toBeTruthy();
  });
});
