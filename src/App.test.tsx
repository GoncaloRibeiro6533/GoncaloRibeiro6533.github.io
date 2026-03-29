import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders main portfolio container', () => {
  const { container } = render(<App />);
  expect(container.querySelector('.main-container')).toBeInTheDocument();
});
