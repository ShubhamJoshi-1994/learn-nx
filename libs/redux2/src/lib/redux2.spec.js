import React from 'react';
import { render } from '@testing-library/react';
import Redux2 from './redux2';
describe('Redux2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Redux2 />);
    expect(baseElement).toBeTruthy();
  });
});
