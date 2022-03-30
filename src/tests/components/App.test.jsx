import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../components/App';

describe('When render <App />', () => {
  test('should show text content', () => {
    render(<App />);
    expect(screen.getByText('Hello world with React And Craco And Vitest!')).toBeInTheDocument();
  })
})