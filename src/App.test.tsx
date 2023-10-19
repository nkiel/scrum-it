import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('counter', () => {
    const { getByRole } = render(<App />);

    const countBtn = getByRole('button');
    expect(countBtn.onclick).not.toBe(null);

    expect(countBtn.textContent).contains(0);
    fireEvent.click(countBtn);
    fireEvent.click(countBtn);
    expect(countBtn.textContent).contains(2);
  });
});
