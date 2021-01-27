import React from 'react';
import { render } from '@testing-library/react';
import Shared3 from './shared3';
describe('Shared3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shared3 />);
    expect(baseElement).toBeTruthy();
  });
});
