import React from 'react';
import { render } from '@testing-library/react';
import Redux1 from './redux1';
describe('Redux1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Redux1 />);
    expect(baseElement).toBeTruthy();
  });
});
