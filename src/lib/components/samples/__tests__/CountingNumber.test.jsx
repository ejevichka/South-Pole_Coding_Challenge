import React from 'react';
import { render, screen } from '@testing-library/react';
import CountingNumber from '~/lib/components/samples/CountingNumber'

describe('CountingNumber', () => {
  test('renders the animated number', () => {
   render(<CountingNumber to={10} />)
    const animatedNumber = screen.getByTestId('animated');

    expect(animatedNumber).toBeInTheDocument();
  });

  test('throws an error when "to" prop is negative', () => {
    // Disable error logging during the test
    const errorSpy = jest.spyOn(console, 'error').mockImplementation();
  
    expect(() => render(<CountingNumber to={-5} />)).toThrowError('The "to" prop should be a positive number');

    expect(errorSpy).toHaveBeenCalledWith('The "to" prop should be a positive number');
    errorSpy.mockRestore();
  });
});
