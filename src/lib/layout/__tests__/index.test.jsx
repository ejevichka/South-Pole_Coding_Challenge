import React from 'react';
import { render, screen } from '@testing-library/react';
import StepperForm from '~/lib/layout/StepperForm'

describe('StepperForm', () => {
  test('renders correctly', () => {
    render(<StepperForm />);

    // Assert snapshot
    expect(screen.getByTestId('heading')).toMatchSnapshot();
  });

  test('displays "CALCULATE YOUR FOOTPRINT" heading', () => {
    render(<StepperForm />);

    // Assert presence of heading text
    
    expect(screen.getByTestId('heading')).toBeInTheDocument();
  });
});

