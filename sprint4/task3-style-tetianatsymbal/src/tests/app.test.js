import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../components/app/app.js';

it('Renders App without crashing', () => {  
  render(<App />);
});


it('Renders App with class', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('element-app')).toHaveClass('wrapper-app');
  });
