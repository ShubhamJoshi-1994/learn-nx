import React from 'react';
import { render } from '@testing-library/react';

import Shared2 from './shared2';

describe('Shared2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shared2 />);
    expect(baseElement).toBeTruthy();
  });
});
