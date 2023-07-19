import { render, screen } from '@testing-library/react';
import CountingNumber from '~/lib/components/samples/CountingNumber'

describe('CountingNumber', () => {
  test('renders the animated number', () => {
   render(<CountingNumber to={10} />)
    const animatedNumber = screen.getByTestId('animated');

    expect(animatedNumber).toBeInTheDocument();
  });
});
