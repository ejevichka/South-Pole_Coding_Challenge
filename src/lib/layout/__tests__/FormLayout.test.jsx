import { render, screen } from '@testing-library/react';
import FormLayout from '~/lib/layout/FormLayout';

describe('FormLayout', () => {
  test('renders correctly', () => {
    render(<FormLayout />);
    // Assert snapshot
    expect(screen.getByTestId('heading_h1')).toMatchSnapshot();
  });

  test('displays "CALCULATE YOUR FOOTPRINT" heading', () => {
    render(<FormLayout />);
    // Assert presence of heading text 
    expect(screen.getByTestId('heading_h1')).toBeInTheDocument();
    expect(screen.getByTestId('heading_h6')).toBeInTheDocument();
  });
});
